const client = require('cheerio-httpcli');
const fs = require('fs');

const url = 'https://example.com';
const element ='title';

fs.writeFileSync('sample.csv', "");

client.fetch(url, function(err, $, res) {
    if (err) {
        console.log(err);
    } else {
        let scrapingArray = [];

        $(element).each(function() {

        scrapingArray.push($(this).text());

        });
        console.log(scrapingArray);

        fs.appendFileSync('sample.csv', scrapingArray, 'utf-8');
    }
});