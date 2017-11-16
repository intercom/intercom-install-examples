# PHP / Laravel

This is a basic example app that uses the Laravel [tutorial application](https://laravel-news.com/your-first-laravel-application) code to load the Intercom Messenger.

For the purposes of demonstrating how the Intercom Messenger can be loaded differently for visitors and logged in users this app offers the option to create an account and login.

If you want to clone this example and get the app up and running locally, make sure you have:
- A local PHP environment (we used Valet, you can see instructions [here](https://laravel.com/docs/5.3/valet#valet-or-homestead))
- A database - we used MySQL. Make sure it is installed (`brew install mysql`) and running (`brew services start mysql`), and create a `.env` file to mimic the example. For local testing you can set the username to `root` and password to an empty string.
- Node installed.

Then start the server using `php artisan serve`. It should be running on `localhost:8000`.

1. To install the messenger for website visitors (logged out), add the snippet to the welcome page before the closing body tag like [this](https://github.com/intercom/intercom-install-examples/blob/master/php-laravel/resources/views/welcome.blade.php#L94).
1. Then refresh the page and see the Intercom Messenger installed.


1. To then install the messenger for logged in users, create an account and login. See that the Intercom Messenger no longer loads.
1. We have to add the snippet to each page we want the Intercom Messenger to appear on. So, now add the snippet to the app's main layout page before the closing body tag like [this](https://github.com/intercom/intercom-install-examples/blob/master/php-laravel/resources/views/layouts/app.blade.php#L79).
1. Since we want to track the logged-in user, get the details of the current user (e.g. like [this](https://github.com/intercom/intercom-install-examples/blob/master/php-laravel/resources/views/layouts/app.blade.php#L82)) and add it to the snippet.
1. To make sure your setup is secure, generate a user hash (for more information on why we do this, read [here](https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product)). Make the variable available to the view like [this](https://github.com/intercom/intercom-install-examples/blob/master/php-laravel/app/Http/Controllers/HomeController.php#L27-L28).
1. Set your secret key (find it [here](https://app.intercom.io/a/apps/_/settings/identity-verification/web)) inside the .env file
1. Refresh the page to see the Intercom Messenger securely setup for both logged in users!
