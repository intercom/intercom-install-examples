# Go

This repo is an example application of the Intercom Messenger on a Go web app. You can follow along and look at how it is implemented in the code.

On the **server side**, return identifying information about the currently logged-in user to the Intercom Messenger:
1. Edit the placeholders to include the email address of the user who is currently logged-in ([see code](https://github.com/intercom/intercom-install-examples/blob/14465ba85d0cfbca63e12a7e72efa1c2294d0d58/go/app.go#L37)). You will need to return this data from your server ([see code](https://github.com/intercom/intercom-install-examples/blob/14465ba85d0cfbca63e12a7e72efa1c2294d0d58/go/app.go#L41)).
1. Now, generate a hash based on the user’s email and your Intercom identity verification secret key ([see code](https://github.com/intercom/intercom-install-examples/blob/14465ba85d0cfbca63e12a7e72efa1c2294d0d58/go/app.go#L39)). If you want more info on why we do this check out [this doc](https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product).

On the **client side**:
1. Paste the code right before the closing body tag of every page where you want the Intercom Messenger to appear ([see code](https://github.com/intercom/intercom-install-examples/blob/14465ba85d0cfbca63e12a7e72efa1c2294d0d58/go/layout.html#L16)).

   *If you have already installed the Intercom Messenger, you only have to update the `window.intercomSettings` with the `user_` attributes for logged-in users.*

1. Almost there! Log in to your app in your development environment to test out the installation. You should see a feedback window popup in the bottom right hand corner.

If you want to clone this example and get the app up and running locally, make sure you have Go installed.

Then start the server using `go run app.go`. It should be running on `localhost:8080`.
