const fs = require('fs');
const client = require('cheerio-httpcli');

const url = 'https://example.com';
const element = '.img img';

client.download
    .on('ready', function(stream) {
    	const pathArray = stream.url.pathname.split("/");
    	const pathSlice = pathArray.slice(-2);
    	const filename = pathSlice.join('-');

        stream.pipe(fs.createWriteStream('image/'+ filename));
        console.log(stream.url.href + 'をダウンロードしました');
    })
    .on('error', function(err) {
        console.error(err.url + 'をダウンロードできませんでした: ' + err.message);
    })
    .on('end', function() {
        console.log('ダウンロードが完了しました');
    });

client.download.parallel = 4;


client.fetch(url, function(err, $, res, body) {
    $(element).download();
    console.log('OK!');
});
