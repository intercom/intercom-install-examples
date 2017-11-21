from flask import Flask, render_template, jsonify
# 1. Load hmac modules
import hashlib
import hmac
import os

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/intercomSettings")
def intercomSettings():
    # 2. Fake user loading, use real logged in user data in your app
    logged_in_user = { "id": "1234abcd", "email": "something@example.com" }
    # Copy your app id and secret key from the guide and store in environment variables or secure key store
    # DO NOT commit your key to your repo
    result = hmac.new(os.environ['INTERCOM_SECRET_KEY'], logged_in_user["id"], hashlib.sha256).hexdigest()
    # 3. Return Intercom settings from endpoint
    return jsonify({"app_id" : "<APP_ID>", "user_id" : logged_in_user["id"], "user_hash" : result })

if __name__ == "__main__":
    app.run()
