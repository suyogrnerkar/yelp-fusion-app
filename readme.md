# Yelp Fusion App
We love ice cream! Tell us what the top five ice cream shops in Alpharetta are and why.

## Setup

Clone the repo:

```
$ git clone https://github.com/suyogrnerkar/yelp-fusion-app.git
```

Go into the directory:

```
$ cd yelp-fusion-app
```

Install the dependences:

```
$ npm install 
```
## Usage

Once you're all setup, you should be able to run the script directly from the command line:

```
$ npm run start
```

It will print the first 5 businesses returned with first review:
```javascript
> yelp-fusion-app@1.0.1 start
> node index.js --BUSINESS_TYPE='ice cream' --CITY='Alpharetta'


    BUSINESS NAME: Where's The Scoop
    BUSINESS ADDRESS: 26 Old Roswell St,Ste 102,Alpharetta, GA 30009
    REVIEWER:  Mhailene M.
    REVIEW: I'm so happy they opened a second location in Alpharetta!! The other l..


    BUSINESS NAME: Scream'n Nuts
    BUSINESS ADDRESS: 5950 North Point Pkwy,Alpharetta, GA 30022
    REVIEWER:  Elizabeth F.
    REVIEW: One of my favorite donut shops outside the perimeter! They make the li..


    BUSINESS NAME: Kilwins- Alpharetta City Center
    BUSINESS ADDRESS: 251 Market St,Alpharetta, GA 30009
    REVIEWER:  Jarrod F.
    REVIEW: Stopped into Kilwins for dessert after dinner (review coming soon) and..


    BUSINESS NAME: Four Fat Cows
    BUSINESS ADDRESS: 64 N Main St,Alpharetta, GA 30009
    REVIEWER:  Mary Jane S.
    REVIEW: This is one of the cutest ice cream shops I have visited in a long tim..


    BUSINESS NAME: Jeni's Splendid Ice Creams
    BUSINESS ADDRESS: 800 Avalon Blvd,Alpharetta, GA 30009
    REVIEWER:  Sranee B.
    REVIEW: Ugh I love Jeni's! They have such a great selection of unique flavors ..
```

