# Node.js, Express, Handlebars/Mustache

This repo is an example application of the Intercom Messenger on a Node web app using the Express framework and templating with Handlebars. You can follow along and look at how it is implemented in the code.

In the **server file**, return identifying information about the currently logged-in user to the Intercom Messenger:
1. Install the Intercom SDK
    ```
    npm i -s intercom-client
    ```
1. Load `IdentityVerification` class ([see code](https://github.com/intercom/intercom-install-examples/blob/fe3d94bc0ce42675ff458c5dda7a881e6875cda0/node-express-handlebars/app.js#L3))
    ```js
    var IdentityVerification = require('intercom-client').IdentityVerification;
    ```
1. Generate a hash based on the user’s email and your Intercom identity verification secret key and make this data available to your template ([see code](https://github.com/intercom/intercom-install-examples/blob/fe3d94bc0ce42675ff458c5dda7a881e6875cda0/node-express-handlebars/app.js#L24)). If you want more info on why we do this check out [this doc](https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product).

In the **template**:
1. Paste the code right before the closing body tag of every page where you want the Intercom Messenger to appear ([see code](https://github.com/intercom/intercom-install-examples/blob/fe3d94bc0ce42675ff458c5dda7a881e6875cda0/node-express-handlebars/views/index.hbs#L16)).
1. Edit the placeholders to include the email address of the user who is currently logged-in ([see code](https://github.com/intercom/intercom-install-examples/blob/fe3d94bc0ce42675ff458c5dda7a881e6875cda0/node-express-handlebars/views/index.hbs#L21)).

   *If you have already installed the Intercom Messenger, you only have to update the `window.intercomSettings` with the `user_` attributes for logged-in users.*

1. Almost there! Log in to your app in your development environment to test out the installation. You should see a feedback window popup in the bottom right hand corner.

If you want to clone this example and get the app up and running locally, start the server using `npm start`. It should be running on `localhost:3009`.
