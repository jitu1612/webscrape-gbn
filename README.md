# A simple web scraping module for websites like BigBasket, Grofers and Natures Basket

Websites supported for scraping - BigBasket, Grofers and Natures Basket

# Run in Command Line

Command to run this npm
node app.js -u Your-URL-String OR -url Your-URL-String
eg:--

node app.js -u https://grofers.com/prn/maggi-masala-noodles/prid/169812

# Install this NPM

npm i webscrape-gbn

# Usage

var scrape = require('webscrape-gbn')

scrape.webscrape('https://grofers.com/prn/maggi-masala-noodles/prid/169812',function(err,data){
 if(err){
    console.log(err)
  }else{
    console.log(data)
  }
})