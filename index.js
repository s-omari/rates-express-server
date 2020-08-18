const express = require('express');
const app = express();
app.use(express.json());

// to perform HTTP request
const axios = require("axios");

// define desired port
const port = 3000;

// Set the base currency to CAD
const baseCurrency = 'CAD';


// Routes

// get exchange rates for all currencies with predefined base
app.get('/api/exchange-rates', (req, res) => {
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



app.listen(port, () => console.log(`Listening on port ${port}`));
