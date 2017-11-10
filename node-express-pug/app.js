const express = require('express');
const IdentityVerification = require('intercom-client').IdentityVerification;
// Copy your key from the guide and store in environment variables or secure key store
// DO NOT commit your key to your repo
const INTERCOM_SECRET_KEY = 'superSecretKeyKeepMeSafe';

const app = express();

// Fake user store
function loadUser(req, res, next) {
  req.user = {
    id: '1',
    email: 'example@user.com'
  };
  next();
}

// Intercom identity verification hash middleware
// Sets req.intercomUserHash
function intercomIdentityVerification(req, res, next) {
  const userHash = IdentityVerification.userHash({
    secretKey: INTERCOM_SECRET_KEY,
    identifier: req.user.id || req.user.email
  });

  req.intercomUserHash = userHash;
  next();
}

app.set('view engine', 'pug')
app.use(loadUser);
app.use(intercomIdentityVerification);

app.get('/', function(req, res) {
  res.render('index', {
    intercomUserHash: req.intercomUserHash,
    user: req.user,
    appId: '<putYourAppIdHere>'
  });
});

app.listen(3009);
