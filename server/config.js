const dotenv = require('dotenv');

dotenv.config();

module.exports={
  port: process.env.SERVER,
  twitterApiKey: process.env.API_KEY,
  twitterApiKeySecret: process.env.API_KEY_SECRET,
  twitterBearerToken: process.env.BEARER_TOKEN,
  twitterAccessToken: process.env.ACCESS_TOKEN,
  twitterAccessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
};
