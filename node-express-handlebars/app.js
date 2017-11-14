var express = require('express');
// 1. Load IdentityVerfication class
var IdentityVerification = require('intercom-client').IdentityVerification;
// Copy your app id and secret key from the guide and store in environment variables or secure key store
// DO NOT commit your key to your repo
var INTERCOM_SECRET_KEY = 'YOUR_SECRET_KEY';
var INTERCOM_APP_ID = 'YOUR_APP_ID';

var app = express();

app.set('view engine', 'pug')

// 2. Fake user loading middleware
app.use(function(req, res, next) {
  req.user = {
    id: '1',
    email: 'example@user.com'
  };
  next();
});

// 3. Generate hash using user data and attach to req
app.use(function(req, res, next) {
  var userHash = IdentityVerification.userHash({
    secretKey: INTERCOM_SECRET_KEY,
    identifier: req.user.id || req.user.email
  });

  req.intercomUserHash = userHash;
  next();
});

// 4. Pass hash along with user data to template
app.get('/', function(req, res) {
  res.render('index', {
    intercomAppId: INTERCOM_APP_ID,
    user: req.user,
    intercomUserHash: req.intercomUserHash,
  });
});

app.listen(3009);
