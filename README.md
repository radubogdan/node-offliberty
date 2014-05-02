Offliberty-node
===============

Offlibery-node is a simple interface to the offliberty.com download service.

## Methods

### `off(url, callback)`
  - `url` - String representing the the URL you want to get download links for.
  - `callback`: the callback function

## Example

```js
var offliberty = require('offliberty');

console.log('Requesting...');
offliberty.off('https://www.youtube.com/watch?v=CIqWwiC1BFI', function (err, downloadUrl) {
    console.log(err || downloadUrl);
});
```

## Test

```sh
$ npm test
```

## Changelog

  - `0.0.1`
    - First release
    - Merge [#2](https://github.com/radubogdan/node-offliberty/pull/2)
    - Merge [#1](https://github.com/radubogdan/node-offliberty/pull/1)
  - `0.0.0`
    - First working version

## License
See the LICENSE file.
