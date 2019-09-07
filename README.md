# A simple web scraping module for websites like BigBasket, Grofers and Natures Basket

Websites supported for scraping - BigBasket, Grofers and Natures Basket

## Run in Command Line

Command to run this npm
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

```javascript
var scrape = require('webscrape-gbn')

scrape.webscrape('https://grofers.com/prn/maggi-masala-noodles/prid/169812',function(err,data){
 if(err){
    console.log(err)
  }else{
    console.log(data)
  }
})
```

## License
[MIT](https://choosealicense.com/licenses/mit/)