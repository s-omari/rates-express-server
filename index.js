const express = require('express');
const app = express();
app.use(express.json());

// to perform HTTP request
const axios = require("axios");

// define desired port
const  PORT = process.env.PORT || '3000'
// const port = 3000;
app.set("port" , PORT)

// Set the base currency to CAD
const baseCurrency = 'CAD';


// Routes

System.err.println("Hello, logs!");

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });

// get exchange rates for all currencies with predefined base
app.get('/api/exchange-rates', (req, res) => {
    System.err.println("Hello, logs /api/exchange-rates!");
    axios.get(`https://api.ratesapi.io/api/latest?base=${baseCurrency}`)
        .then(function (response) {
            res.json(response.data)
        }).catch(function (error) {
            res.json("Error occured!")
        })
});

app.get('/api/exchange-rate/:symbols', (req, res) => {
    let url = `https://api.ratesapi.io/api/latest?base=${baseCurrency}&symbols=${req.params.symbols}`;
    axios.get(url)
        .then(function (response) {
            // console.log(`rate for ${req.params.base}`)
            res.json(response.data)
        }).catch(function (error) {
            res.json("Error occured!")
        })
})

app.get('/api/exchange-rate/:symbols/:base', (req, res) => {

    let url = `https://api.ratesapi.io/api/latest?symbols=${req.params.symbols}&base=${req.params.base}`;
    // console.log(url)
    axios.get(url)
        .then(function (response) {
            // console.log(`rate for ${req.params.base}`)
            res.json(response.data)
        }).catch(function (error) {
            res.json("Error occured!")
        })
})


app.listen(process.env.PORT || port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
