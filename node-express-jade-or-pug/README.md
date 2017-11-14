# Node.js, Express, Jade/Pug

Simple Node.js driven website with templates.

1. Install the Intercom SDK
    ```
    npm i -s intercom-client
    ```
1. Load `IdentityVerification` class
    ```js
    var IdentitiyVerification = require('intercom-client').IdentityVerification;
    ```
1. Load your user data
1. Generate user hash using your user data with the Intercom SDK
    ```js
    var userHash = IdentityVerification.userHash({
      secretKey: INTERCOM_SECRET_KEY,
      identifier: req.user.id || req.user.email
    });
    ```
1. Pass user data and hash to template and use in the `intercomSnippet`
