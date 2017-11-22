# Example Node.js, Express, single-page app

Example Node.js API example for booting Intercom from a single page app. In this example, we just use jQuery to asyncronously load the user data to boot Intercom, but you can apply the same concept to any frontend framework.

## Check out the code above ⬆️

Check out the code in this repo to see an example of how to install the Messenger.

## Summary

1. Install the Intercom SDK
    ```
    npm i -s intercom-client
    ```
1. Load `IdentityVerification` class
    ```js
    var IdentityVerification = require('intercom-client').IdentityVerification;
    ```
1. Load your user data
1. Generate user hash using your user data with the Intercom SDK
    ```js
    var userHash = IdentityVerification.userHash({
      secretKey: INTERCOM_SECRET_KEY,
      identifier: req.user.id || req.user.email
    });
    ```
1. Return the user data and hash from an endpoint and call `window.Intercom('boot', data)`, where data is the Intercom settings.
    ```js
    window.Intercom('boot', {
      app_id: ...,
      user_id: ...,
      user_email: ...,
      user_hash: ...
    });
    ```
