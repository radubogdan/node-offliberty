Offliberty
===============

[![NPM](https://nodei.co/npm/offliberty.png?compact=true)](https://nodei.co/npm/offliberty/)

Offlibery is a simple interface to the [offliberty.com](http://offliberty.com) download service.

## Usage

### Directly from the terminal

You can pass multiple URLs:

```sh
$ sudo npm install -g offliberty
$ off https://www.youtube.com/watch?v=Y1st6O1tqII https://www.youtube.com/watch?v=VWV7CGx9MAQ
```

Or you can pass en entire file:
Notice: Reading from file is synchronous, don't use large files.

```sh
$ cat music.txt
http://www.youtube.com/watch?v=0s7E2uIn3tM
http://www.youtube.com/watch?v=iSRu0_DrTyU
http://www.youtube.com/watch?v=C3QK1FVVNNk
$ off music.txt
Requesting...
http://k27.offliberty.com/C3QK1FVVNNk.mp3
http://k12.offliberty.com/iSRu0_DrTyU.mp3
http://k52.offliberty.com/0s7E2uIn3tM.mp3
```

```sh
Requesting...
http://k18.offliberty.com/VWV7CGx9MAQ.mp3
http://k14.offliberty.com/Y1st6O1tqII.mp3
```

### From awesome Javascript:

```js
var offliberty = require('offliberty');

console.log('Requesting...');
offliberty.off('https://www.youtube.com/watch?v=CIqWwiC1BFI', function (err, downloadUrl) {
    console.log(err || downloadUrl);
});
```

```sh
Requesting...
http://k15.offliberty.com/CIqWwiC1BFI.mp3
```

## Methods

### `off(url, callback)`
  - `url`: String representing of the URL you want to get download links for.
  - `callback`: the callback function

## Test

```sh
$ npm test
```

## License
See the [LICENSE](https://raw.githubusercontent.com/radubogdan/node-offliberty/master/LICENSE) file.

## Notes
Special thanks to [Ionică Bizău](https://github.com/IonicaBizau) who forked and helped me improve this module, and [Marius Gavrilescu](https://metacpan.org/author/MGV) who had the idea and made this first for the Perl Community.
