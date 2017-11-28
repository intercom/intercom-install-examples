# PHP / Laravel

This repo is an example application of the Intercom Messenger on a PHP web app using the Laravel framework. You can follow along and look at how it is implemented in the code.

In the **server file**, return identifying information about the currently logged-in user to the Intercom Messenger:
1. Generate a hash based on the user’s email and your Intercom identity verification secret key and make this data available to your template ([see code](https://github.com/intercom/intercom-install-examples/blob/8203e80c9d28bb345d990d062bff9d101c395430/php-laravel/app/Http/Controllers/HomeController.php#L27)). If you want more info on why we do this check out [this doc](https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product).

In the **template**:
1. Paste the code right before the closing body tag of every page where you want the Intercom Messenger to appear ([see code](https://github.com/intercom/intercom-install-examples/blob/8203e80c9d28bb345d990d062bff9d101c395430/php-laravel/resources/views/layouts/app.blade.php#L79)).
1. Edit the placeholders to include the email address of the user who is currently logged-in ([see code](https://github.com/intercom/intercom-install-examples/blob/8203e80c9d28bb345d990d062bff9d101c395430/php-laravel/resources/views/layouts/app.blade.php#L82)).

   *If you have already installed the Intercom Messenger, you only have to update the `window.intercomSettings` with the `user_` attributes for logged-in users.*

1. Almost there! Log in to your app in your development environment to test out the installation. You should see a feedback window popup in the bottom right hand corner.

If you want to clone this example and get the app up and running locally, make sure you have a local PHP environment, node, and [valet](https://laravel.com/docs/5.3/valet#valet-or-homestead) installed. We used MySQL for the DB. Make sure it is installed (`brew install mysql`) and running (`brew services start mysql`), and create a `.env` file to mimic the example. For local testing you can set the username to `root` and password to an empty string.

Then start the server using `php artisan serve`. It should be running on `localhost:8000`.

*This example uses the Laravel [tutorial application](https://laravel-news.com/your-first-laravel-application) code.*
