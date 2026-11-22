# sanakirja

from flask import Flask, jsonify
import json

app = Flask(__name__)


with open("dictionary.json", "r", encoding="utf-8") as file:
    dictionary = json.load(file)


@app.route("/translate/<word>", methods=["GET"])
def translate(word):

    word = word.lower()

    if word in dictionary:

        return jsonify({
            "English": word,
            "Finnish": dictionary[word]
        })

    else:
        return jsonify({
            "error": "Word not found"
        }), 404


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=3000, use_reloader=True)