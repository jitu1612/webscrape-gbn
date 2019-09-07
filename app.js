const cheerio=require('cheerio');
const request = require('request');
var args = process.argv;

//var url="https://grofers.com/prn/maggi-masala-noodles/prid/169812"
//node app.js -u https://grofers.com/prn/maggi-masala-noodles/prid/169812
//node app.js -u https://www.bigbasket.com/pd/100006283/premier-special-face-tissue-100-pcs/


var scrapeGBN= function(url,callback){

    if(!url){
        callback && callback("Please give URL",null)
    }

    var options = {
        headers: {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36'},
        method: 'GET'
    }
request(url, options, function(err, response, html){
    if(!err){
        var $= cheerio.load(html);
        var json={}
        if(url.match("grofers.com")){
            var name= $('.pdp-product__name').text()
            var desc=$('.product-attribute__attr--description').text()
            var price=$('.pdp-product__price--new').text()
            var size=$('.product-variant__btn--active').text()
              
            json['name']=name
            json['description']=desc
            json['price']=price
            json['size']=size
            msg(json)
            callback && callback(null,json)
        }else if(url.match("bigbasket.com")){
            var name= $('h1').text()
            var desc=$('._26MFu').children().eq(1).find('p').text()
            var price=$('.IyLvo').text()
            var size=$('._3Yybm').text()
            
                json['name']=name
                json['description']=desc
                json['price']=price
                json['size']=size

                msg(json)
                callback && callback(null,json)
        }else if(url.match("naturesbasket.co.in")){
            var name= $('.pd_Title').text()
            var desc=$('#divShortDesc').text()
            var price=$('.search_PSellingP').text()
            var image=$('#impProductsImage').attr("src")
            
                json['name']=name
                json['description']=desc
                json['price']=price
                json['image']=image

                msg(json)
                callback && callback(null,json)
        }else{
            info();
            callback && callback("Websites supported for scraping - BigBasket, Grofers and Natures Basket",null)
        }
        
    }
})}
 
var msg=function(message){
    if (require.main === module) {
    console.log(message)
    }
}      
function argsCheck() {
    //console.log(args)
    if (args.length < 3 || (args.indexOf('-url') < 0 &&
            args.indexOf('-u') < 0)) {
        info();
        return;
    }else{
        var indx = args.indexOf('-url');
        var indx2 = args.indexOf('-u');
        
            if(indx>=2){
                //console.log(indx+" : "+args[indx + 1])
                scrapeGBN(args[indx + 1]);
            }else if(indx2>=2){
                //console.log(indx2+" : "+args[indx2 + 1])
                scrapeGBN(args[indx2 + 1]);
            }else{
                info();
            }
    }
    
}

if (require.main === module) {
    argsCheck();
}

function info() {
    console.log("Websites supported for scraping - BigBasket, Grofers and Natures Basket");
    console.log("Command to run this npm");
    console.log("node app.js -u Your-URL-String OR -url Your-URL-String");
}

module.exports = {
    webscrape : scrapeGBN
};

