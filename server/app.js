const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Twitter = require('twitter');
const {
  twitterApiKey,
  twitterApiKeySecret,
  twitterBearerToken,
  twitterAccessToken,
  twitterAccessTokenSecret,
} = require('./config');

// const{ twitterBearerToken } = require('./config');

const app = express();

const client = new Twitter({
  consumer_key: `${twitterApiKey}`,
  consumer_secret: `${twitterApiKeySecret}`,
  access_token_key: `${twitterAccessToken}`,
  access_token_secret: `${twitterAccessTokenSecret}`,
});

const params = { screen_name: 'nodejs' };
client.get('statuses/user_timeline', params, (error, tweets, response) => {
  if (!error) {
    console.log(tweets);
  }
  if (error) {
    console.log(error);
  }
});

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

// const config = {
//   method: 'get',
//   // url: `https://api.twitter.com/labs/2/users/by/username/${e.user}?expansions=pinned_tweet_id`,
//   url: `https://api.twitter.com/labs/2/users/by/username/${e.user}`,
//   headers: {
//     Authorization: `Bearer ${twitterBearerToken}`,
//     Cookie:
//       'personalization_id="v1_dLCv7GSVPP3SbawrnPi0+w=="; guest_id=v1%3A159899956972344374',
//   },
// };

// axios(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
