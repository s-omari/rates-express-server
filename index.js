const express = require('express');
const app = express();
const axios = require("axios");

app.use(express.json());


// Set desired port
const  PORT = process.env.PORT || '3000'
app.set("port" , PORT)
// Set the base currency to CAD
const baseCurrency = 'CAD';
const ratesBaseURL = 'https://api.ratesapi.io/api/latest'

// Routes
app.get('/', (req, res) => {
    return res.send('A simple express api :)   '+ 'github : s-omari/rates-express-server');
  });

app.get('/api/exchange-rates', (req, res) => {
    axios.get(`${ratesBaseURL}?base=${baseCurrency}`)
        .then(function (response) {
            res.json(response.data)
        }).catch(function (error) {
            res.json("Error occured!")
        })
});

app.get('/api/exchange-rate/:symbols', (req, res) => {
    let url = `${ratesBaseURL}?base=${baseCurrency}&symbols=${req.params.symbols}`;
    axios.get(url)
        .then(function (response) {
            res.json(response.data)
        }).catch(function (error) {
            res.json("Error occured!")
        })
})

app.get('/api/exchange-rate/:symbols/:base', (req, res) => {
    let url = `${ratesBaseURL}?symbols=${req.params.symbols}&base=${req.params.base}`;
    axios.get(url)
        .then(function (response) {
            res.json(response.data)
        }).catch(function (error) {
            res.json("Error occured!")
        })
})


app.listen(process.env.PORT || PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
