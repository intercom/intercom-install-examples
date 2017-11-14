var express = require('express');
// 1. Load IdentityVerfication class
var IdentityVerification = require('intercom-client').IdentityVerification;
// Copy your app id and secret key from the guide and store in environment variables or secure key store
// DO NOT commit your key to your repo
var INTERCOM_SECRET_KEY = 'amtB5tZTxvw2CfdJxMIG3G7_edcNUpuoEKjkpBqX';
var INTERCOM_APP_ID = 'lbz60kgo';

var app = express();
app.use(express.static('public'))

// 2. Fake user loading middleware, use real user data in your app
app.use(function (req, res, next) {
  req.user = {
    id: '1',
    email: 'example@user.com'
  };
  next();
});

// 3. Return Intercom settings from endpoint
app.get('/intercomSettings', function (req, res) {
  var userHash = IdentityVerification.userHash({
    secretKey: INTERCOM_SECRET_KEY,
    identifier: req.user.id || req.user.email
  });

  res.json({
    app_id: INTERCOM_APP_ID,
    user_id: req.user.id,
    user_hash: userHash,
  });
});

app.listen(3009);
