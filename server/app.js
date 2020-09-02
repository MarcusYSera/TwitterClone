const express = require('express');
const cors = require('cors');

const{ twitterBearerToken } = require('./config');

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET",
  optionsSuccessStatus: 200
})
);

const config = {
  method: 'get',
  // url: `https://api.twitter.com/labs/2/users/by/username/${e.user}?expansions=pinned_tweet_id`,
  url: `https://api.twitter.com/labs/2/users/by/username/${e.user}`,
  headers: {
    Authorization: `Bearer ${twitterBearerToken}`,
    Cookie:
      'personalization_id="v1_dLCv7GSVPP3SbawrnPi0+w=="; guest_id=v1%3A159899956972344374',
  },
};

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message});
});

module.exports = app;