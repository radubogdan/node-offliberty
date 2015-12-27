var offliberty = require('../lib/index.js');

console.log('Requesting...');
offliberty.off('https://www.youtube.com/watch?v=MYSVMgRr6pw', function (err, downloadUrl) {
    console.log(err || downloadUrl);
});
