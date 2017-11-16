# PHP / Laravel

This is a basic example app that uses the Laravel [tutorial application](https://laravel-news.com/your-first-laravel-application) code to load the Intercom Messenger.

For the purposes of demonstrating how the Intercom Messenger can be loaded differently for visitors and logged in users this app offers the option to create an account and login.

If you want to clone this example and get the app up and running locally, make sure you have:
- A local PHP environment (we used Valet, you can see instructions [here](https://laravel.com/docs/5.3/valet#valet-or-homestead))
- A database - we used MySQL. Make sure it is installed (`brew install mysql`) and running (`brew services start mysql`), and create a `.env` file to mimic the example. For local testing you can set the username to `root` and password to an empty string.
- Node installed.

Then start the server using `php artisan serve`. It should be running on `localhost:8000`.

1. To install the messenger for website visitors (logged out), add the snippet to the welcome page before the </body> tag like [this](link).
1. Then refresh the page and see the Intercom Messenger installed.


1. To then install the messenger for logged in users, create an account and login. See that the Intercom Messenger no longer loads.
1. We have to add the snippet to each page we want the Intercom Messenger to appear on. So, now add the snippet to the home page before the </body> tag like [this](link).
1. Since we want to track the logged-in user, get the details of the current user (e.g. like [this](link)) and add it to the hash.
1. To make sure your setup is secure, generate a user hash (for more information on why we do this, read [here](link)). Add this hash to the snippet like [this](link), and make the variable available to the view like [this](link).
1. Set your secret key (find it [here](link to intercom settings)) inside the .env file
1. Refresh the page to see the Intercom Messenger securely setup for both logged in users!
