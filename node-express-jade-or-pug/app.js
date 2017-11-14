const express = require('express');
const IdentityVerification = require('intercom-client').IdentityVerification;
// Copy your app id and secret key from the guide and store in environment variables or secure key store
// DO NOT commit your key to your repo
const INTERCOM_SECRET_KEY = 'superSecretKeyKeepMeSafe';
const INTERCOM_APP_ID = 'notSecretAppId';

const app = express();

app.set('view engine', 'pug')

// 1. Fake user loading middleware
app.use(function(req, res, next) {
  req.user = {
    id: '1',
    email: 'example@user.com'
  };
  next();
});

// 2. Generate hash using user data and attach to req
app.use(function (req, res, next) {
  const userHash = IdentityVerification.userHash({
    secretKey: INTERCOM_SECRET_KEY,
    identifier: req.user.id || req.user.email
  });

  req.intercomUserHash = userHash;
  next();
});

// 3. Pass hash along with user data to template
app.get('/', function(req, res) {
  res.render('index', {
    intercomAppId: INTERCOM_APP_ID,
    user: req.user,
    intercomUserHash: req.intercomUserHash,
  });
});

app.listen(3009);
