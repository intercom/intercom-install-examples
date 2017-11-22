# Ruby / Rails

The easiest way to install Intercom in a rails app is using the IntercomRails gem. The gem automatically inserts a <script> tag containing the Intercom Messenger before the closing </body> tag.

This is a very basic example app that uses the IntercomRails gem to load the messenger for visitors and logged in users.
There are more detailed instructions on the rails gem github repository [here](https://github.com/intercom/intercom-rails).

**If you have already installed the messenger for (logged out) website visitors, this will replace the snippet previously installed. You can remove that code.**

1. Add the IntercomRails gem to your Gemfile:
    ```
    gem "intercom-rails"
    ```
1. Then run:
    ```
    bundle install
    ```
1. Take note of your app_id [here](https://app.intercom.io/a/apps/_/settings/api-keys) and generate a config file:
    ```
    rails generate intercom:config YOUR-APP-ID
    ```
1. To chat with visitors to your website uncomment the following line in `config/initializers/intercom.rb`:
    ```
    config.include_for_logged_out_users = true
    ```
1. Set your API secret in `config/initializers/intercom.rb`:
    ```
    config.api_secret = Rails.application.secrets.intercom_secure_mode_secret_key
    ```
1. To track logged-in users, ensure you have the currently logged in user available to the messenger by `current_user` or `@user` in your controller. For this example we have hardcoded it to be a mock user generated via `db/seeds.rb` [here](https://github.com/intercom/intercom-install-examples/blob/master/ruby-rails/app/controllers/home_controller.rb) in the home controller.

1. Set your identity verification secret key to the appropriate environment in `secrets.yml` (to test this out locally you would need to add this key to development as well):
    ```
    production:
    intercom_secure_mode_secret_key: 'GET-YOUR-SECRET-KEY-IN-APP-SETTINGS > IDENTITY-VERIFICATION'
    ```
1. Get the server up and running to see the Intercom Messenger securely setup for both logged out visitors and logged in users:
    ```
    rails server
    ```
