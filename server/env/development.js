module.exports = {
  "DATABASE_URI": "mongodb://localhost:27017/opensponsorship",
  "AMAZON_S3_KEY": process.env.AMAZON_S3_KEY,
  "AMAZON_S3_SECRET": process.env.AMAZON_S3_SECRET,
  "SESSION_SECRET": "what a great session secret code",
  "TWITTER": {
    "consumerKey": "INSERT_TWITTER_CONSUMER_KEY_HERE",
    "consumerSecret": "INSERT_TWITTER_CONSUMER_SECRET_HERE",
    "callbackUrl": "INSERT_TWITTER_CALLBACK_HERE"
  },
  "FACEBOOK": {
    "clientID": "INSERT_FACEBOOK_CLIENTID_HERE",
    "clientSecret": "INSERT_FACEBOOK_CLIENT_SECRET_HERE",
    "callbackURL": "INSERT_FACEBOOK_CALLBACK_HERE"
  },
  "GOOGLE": {
    "clientID": "INSERT_GOOGLE_CLIENTID_HERE",
    "clientSecret": "INSERT_GOOGLE_CLIENT_SECRET_HERE",
    "callbackURL": "INSERT_GOOGLE_CALLBACK_HERE"
  }
};