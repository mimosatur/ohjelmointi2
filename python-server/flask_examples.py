from flask import Flask, request, Response, json

app = Flask(__name__)

# palvelimen juuri, http://127.0.0.1:3000/
@app.route('/')
def hello():
    print('Helloa kutsuttu!')
    return "No moro! Tervetuloa palvelimelle!"

# laskin reitti, esim. http://127.0.0.1:3000/sum?number1=3&number2=6.5
@app.route('/sum')
def calculate_sum():
    args = request.args
    number1 = float(args.get("number1"))
    number2 = float(args.get("number2"))
    total_sum = number1+number2
    #return str(total_sum)
    response = {
        "number1" : number1,
        "number2" : number2,
        "total_sum" : total_sum
    }

    return response

# laskin reitti v2, esim. http://127.0.0.1:3000/sum?number1=3&number2=6.5
@app.route('/sum/<number1>/<number2>')
def calculate_sum2(number1,number2):
    try: 
        number1 = float(number1)
        number2 = float(number2)
        total_sum = number1+number2
        #return str(total_sum)
        response = {
            "number1" : number1,
            "number2" : number2,
            "total_sum" : total_sum
        }
        return response
    
    except ValueError:
        response_content = json.dumps({"message": "virheellinen pyyntö, tarkista arvot"})
        response = Response(response=response_content, status=400, mimetype="application/json")
        return response

# esimerkki html-tyyppisestä vastauksesta
@app.route('/joku-sivu')
def htmlpage():
    response_content = """
    <html>
    <h1>Testailua vaan</h1>
    <p>Tämä on epävalidi html sivusto</p>
    </html>
    """

    return response


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)