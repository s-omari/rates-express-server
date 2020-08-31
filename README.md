# Node Api



##### Simple currency exchange rate api build with 

  - nodejs , environment
  - expressjs , as an framework for building api 
  - axion , to handle http requests

## Purpose
The purpose of this project is to showcase a simple means of quickly putting together a simple api using node. The api is composed of 3 routes and allows the checking  exchage rates of currency against a base currency. 



The default base currency is predefined as CAD however it can be overwritten by the :base route param in the following route:

    /api/exchange-rate/:symbol/:base  
    
example:

    /api/exchange-rate/USD/GBP  


## Routes
    
- /api/exchange-rates -> gets exchane rates for all curencyes with set base rate (CAD)
    
- /api/exchange-rate/:symbol => returns exchange rate for provided curency (symnol) with predefined base currency (CAD) 

- api/exchange-rate/:symbol/:base => returns exchange rate for provided curency (symnol) with provided base currency (base)


## Deployment
Deployed to Heroku
The live api can be found at https://exchange-rates-express.herokuapp.com

## Usage

- Get CAD exchange rates for all currencies 
https://exchange-rates-express.herokuapp.com/api/exchange-rates 

- Get CAD exchange rates for a currency. ex. USD
https://exchange-rates-express.herokuapp.com/api/exchange-rate/USD

- Get exchange rates for a currency and select base currency ex. USD  with base GBP
https://exchange-rates-express.herokuapp.com/api/exchange-rate/USD/GBP 

