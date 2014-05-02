var request = require('request');
var cheerio = require('cheerio');

var off = function(link) {
    console.log('Requesting...');

    var options = {
        url: 'http://offliberty.com/off54.php',
        method: 'POST',
        form: { track: link }
    };

    function callback(err, res, body) {
        if (!err && res.statusCode == 200) {
            var $ = cheerio.load(body);
            console.log($('.download').attr('href'));
        } else {
            console.log(body);
        }
    }

    request(options, callback);
}

exports.off = off;
