"use strict";

const yelp = require('yelp-fusion');
const config = require('config');
const minimist = require('minimist');

// NOTE: YOU SHOULD NOT COMMIT THIS EVEN IN THE CONFIG FILES
// IT SHOULD COME FROM THE ENV VARS. BUT FOR SIMPLICITY
// IT IS COMMITTED.
let API_KEY = config.get('yelpFusionApiConfig.appOne.apiKey');
const argv = minimist(process.argv.slice());
const { BUSINESS_TYPE, CITY } = argv;


const getFormattedAddress = (businessLocationObj) => {
  return businessLocationObj.display_address.join(',');
};

// Create query obj.
const searchRequest = {
  limit: 5,
  term: BUSINESS_TYPE,
  location: CITY,
  sort_by: 'best_match'
};

// Create a new client
const client = yelp.client(API_KEY);

client
  .search(searchRequest)
  .then((resp) => { 

    if (!resp.jsonBody.businesses) {
      throw new Error("No businesses found in response.");
    }

    return resp.jsonBody.businesses;
   })
  .then((businesses) => {
    if (businesses.length === 0) {
      throw new Error("Cannot find businesses for this search query.");
    }

    return Promise.all(
      businesses.map((business) => {

        if(!business.id) {
          throw new Error(`No id found for business ${ business.name }.`);
        }

        return client
          .reviews(business.id)
          .then((response) => {
            
            if(!response) {
              throw new Error(`No review found for business ${ business.name }`);
            }
            
            console.log(`
              BUSINESS NAME: ${business.name}
              BUSINESS ADDRESS: ${getFormattedAddress(business.location)}
              REVIEWER:  ${response.jsonBody.reviews[0].user.name}
              REVIEW: ${response.jsonBody.reviews[0].text.slice(0, 70)}..
            `);
          })
          .catch((e) => {
            let errMsg = `${ e.message }.\n Cannot retrieve the review for business: ${business.name}`;

            throw new Error(errMsg.toString());
          });
      })
    );
  })
  .catch((e) => {
    console.log(`ERROR: \n ${ e.message}.\n Cannot fetch the businesses list.`);
  });
