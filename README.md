Offliberty
===============

[![NPM](https://nodei.co/npm/offliberty.png?compact=true)](https://nodei.co/npm/offliberty/)

Offlibery is a simple interface to the offliberty.com download service.

## Methods

### `off(url, callback)`
  - `url`: String representing of the URL you want to get download links for.
  - `callback`: the callback function

## Example

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

## Test

```sh
$ npm test
```

## Changelog

  - `0.0.2`
    - Check if downloadUrl is not available and display the correct errors.
  - `0.0.1`
    - First release
    - Merge [#2](https://github.com/radubogdan/node-offliberty/pull/2)
    - Merge [#1](https://github.com/radubogdan/node-offliberty/pull/1)
  - `0.0.0`
    - First working version

## License
See the LICENSE file.
