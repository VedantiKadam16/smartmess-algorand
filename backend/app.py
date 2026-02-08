from flask import Flask, jsonify
from blockchain import get_balance, consume_meal, create_meal_token

app = Flask(__name__)

@app.route("/balance/<wallet>")
def balance(wallet):
    return jsonify({"meals": get_balance(wallet)})

@app.route("/consume/<wallet>", methods=["POST"])
def consume(wallet):
    return jsonify({"status": consume_meal(wallet)})

@app.route("/create-token", methods=["POST"])
def create_token():
    return jsonify({"status": create_meal_token()})

if __name__ == "__main__":
    app.run(debug=True)
