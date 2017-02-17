var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var page = "http://www.reddit.com"; // Page url to parse
console.log("Visiting page " + page);

request(page, function(error, response, body) {
	if(error) {
		console.log("Error: " + error);
	}
	
	console.log("Status code: " + response.statusCode);

	if(response.statusCode == 200) { // 200 IS OK
		var $ = cheerio.load(body);
		console.log("Page title: " + $('title').text());
	}
});