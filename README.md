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

## Changelog

  - `0.0.3`
    - Add bin for a better usage
  - `0.0.2`
    - Check if downloadUrl is not available and display the correct errors.
  - `0.0.1`
    - First release
    - Merge [#2](https://github.com/radubogdan/node-offliberty/pull/2)
    - Merge [#1](https://github.com/radubogdan/node-offliberty/pull/1)
  - `0.0.0`
    - First working version

## License
See the [LICENSE](https://raw.githubusercontent.com/radubogdan/node-offliberty/master/LICENSE) file.

## Notes
Special thanks to [Ionică Bizău](https://github.com/IonicaBizau) who forked and helped me improve this module, and [Marius Gavrilescu](https://metacpan.org/author/MGV) who had the idea and made this first for the Perl Community.
