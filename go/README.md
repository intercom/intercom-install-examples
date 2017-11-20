# Go

This is a basic example app that uses Go to load the Intercom Messenger.

For the purposes of demonstrating how the Intercom Messenger can be loaded differently for visitors and logged in users this app offers the option to create an account and login.

If you want to clone this example and get the app up and running locally, make sure you have Go installed.

Then start the server using `go run app.go`. It should be running on `localhost:8080`.

1. We have to add the snippet to each page we want the Intercom Messenger to appear on. So, now add the snippet to the app's main layout page before the closing body tag like [this](https://github.com/intercom/intercom-install-examples/blob/master/go/layout.html#L17).
1. Since we want to track the logged-in user, get the details of the current user and add it to the snippet. We will get this information by passing it from the main function like [this](https://github.com/intercom/intercom-install-examples/blob/master/go/app.go#L34)
1. To make sure your setup is secure, generate a user hash (for more information on why we do this, read [here](https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product)). Make the hash available to the view as well.
1. Environment variables are a useful way to work with sensitive information (think passwords) which your code needs to work with, but don’t need to be checked into your code base. Set your secret key (find it [here](https://app.intercom.io/a/apps/_/settings/identity-verification/web)) as a [environment variable](https://golangcode.com/get-and-set-environment-variables/). While it is not sensitive, you may choose to set your Intercom App Id as one too. 
1. Refresh the page to see the Intercom Messenger setup for both logged in users and visitors!
