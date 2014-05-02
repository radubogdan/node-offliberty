// Dependencies
var request = require('request')
  , cheerio = require('cheerio')
  ;

/**
 *  Offliberty Object
 *  node-offliberty is a simple interface to the offliberty.com
 *  download service.
 *
 */
var Offliberty = {

    /**
     *  offliberty#off (url, callback)
     *  Run a request providing the @url. After the response comes
     *  the @callback function will be called.
     *
     *  Arguments
     *    - url: String representing the the URL you want to get download links for.
     *    - callback: the callback function
     *
     *  Returns the created request.
     *
     */
    off: function(url, callback) {

        var options = {
            url: 'http://offliberty.com/off54.php'
          , method: 'POST'
          , form: { track: url }
        };

        return request(options, function (err, res, body) {

            if (!err && res.statusCode == 200) {
                var $ = cheerio.load(body);
                callback (null, $('.download').attr('href'));
            } else {
                callback (err || body);
            }
        });
    }
};

module.exports = Offliberty;
