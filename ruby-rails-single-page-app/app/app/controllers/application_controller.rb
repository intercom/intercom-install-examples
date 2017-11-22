class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def intercom_settings
    # use actual data from the currently logged in user
    current_user = {
      email: 'nikola.tesla@intercom.io'
    }
    user_hash = OpenSSL::HMAC.hexdigest(
      'sha256', # hash function
      Rails.application.secrets.intercom_secure_mode_secret_key,
      current_user[:email] # user's email address
    )

    render json: {
      app_id: "<INTERCOM_APP_ID>", # replace with your Intercom app id
      user_id: current_user[:email],
      user_hash: user_hash,
    }, status: 200
  end
end
