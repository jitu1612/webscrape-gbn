# webscrape-gbn

## Description

A simple web scraping module. Supported websites for web scraping are BigBasket, Grofers and Natures Basket. 

## Command to run this npm

```bash
node app.js -u Your-URL-String OR -url Your-URL-String
```
eg:-

```bash
node app.js -u https://grofers.com/prn/maggi-masala-noodles/prid/169812
```

## Install this NPM

```bash
npm i webscrape-gbn --save
```

## Usage

You just have to pass url of product page of supported websites. 

You will get response in JSON format.

```javascript
var scrape = require('webscrape-gbn');

scrape.webscrape('https://grofers.com/prn/maggi-masala-noodles/prid/169812',function(err,data){
 if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})
```

## License
[MIT](https://choosealicense.com/licenses/mit/)