# Node / Express

This repo is an example application of the Intercom Messenger on a Node single page app using Express. You can follow along and look at how it is implemented in the code.

## Server side

**On the server side**, add an endpoint that will return identifying information about the currently logged in user to the Intercom Messenger.

*You can also return the user information in the login response instead of a dedicated endpoint if you prefer.*

1. Install the Intercom SDK (Server)
    ```
    npm i -s intercom-client
    ```
1. Load the `IdentityVerification` class (Server)
    ```js
    var IdentityVerification = require('intercom-client').IdentityVerification;
    ```
1. Add a route to your app called `/intercomSettings` ([see code](https://github.com/intercom/intercom-install-examples/blob/b61c0e4d1f3dd27a0bee3ee5688902355e48e348/node-express-single-page-app/app.js#L22)).
1. Return an object to the client containing:
   - The email of the currently logged user
   - A hash based on the user’s email and your Intercom identity verification secret key like ([see code](https://github.com/intercom/intercom-install-examples/blob/b61c0e4d1f3dd27a0bee3ee5688902355e48e348/node-express-single-page-app/app.js#L23)). If you want more info on why this is important, check out [this doc](https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product).

## Client side

**On the client side**, connect to Intercom and load the Messenger:
1. Paste the code right before the closing body tag of every page where you want the Intercom Messenger to appear like ([see code](https://github.com/intercom/intercom-install-examples/blob/b61c0e4d1f3dd27a0bee3ee5688902355e48e348/node-express-single-page-app/public/index.html#L19)).

    *If you have already installed the Intercom Messenger on a page you want to track logged-in users on, remove the `window.intercomSettings` part as we will be using `window.Intercom('boot', …)` to boot the Messenger.*

1. To make sure people always receive the most relevant messages from you, send an update call using `window.Intercom('update')` to Intercom whenever the view and/or URL changes in your app.
1. Almost there! Log in to your app in your development environment to test out the installation. You should see a feedback window popup in the bottom right hand corner.

If you want to clone this example and get the app up and running locally, make sure you have Node installed.

Then `cd` into the server directory and start the server using `npm start`. It should be running on `localhost:3009`.
