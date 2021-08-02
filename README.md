# x-mac-cyrillic [![Build status](https://github.com/mathiasbynens/x-mac-cyrillic/workflows/run-checks/badge.svg)](https://github.com/mathiasbynens/x-mac-cyrillic/actions?query=workflow%3Arun-checks) [![x-mac-cyrillic on npm](https://img.shields.io/npm/v/x-mac-cyrillic)](https://www.npmjs.com/package/x-mac-cyrillic)

_x-mac-cyrillic_ is a robust JavaScript implementation of [the x-mac-cyrillic character encoding as defined by the Encoding Standard](https://encoding.spec.whatwg.org/#x-mac-cyrillic).

This encoding is known under the following names: x-mac-cyrillic, and x-mac-ukrainian.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install x-mac-cyrillic
```

In a browser or in [Node.js](https://nodejs.org/):

```js
import {encode, decode, labels} from 'x-mac-cyrillic';
// or…
import * as xmaccyrillic from 'x-mac-cyrillic';
```

## API

### `xmaccyrillic.labels`

An array of strings, each representing a [label](https://encoding.spec.whatwg.org/#label) for this encoding.

### `xmaccyrillic.encode(input, options)`

This function takes a plain text string (the `input` parameter) and encodes it according to x-mac-cyrillic. The return value is an environment-agnostic `Uint16Array` of which each element represents an octet as per x-mac-cyrillic.

```js
const encodedData = xmaccyrillic.encode(text);
```

The optional `options` object and its `mode` property can be used to set the error mode. The two available error modes are `'fatal'` (the default) or `'replacement'`. (Note: This differs from [the spec](https://encoding.spec.whatwg.org/#error-mode), which recognizes `'fatal`' and `'html'` modes for encoders. The reason behind this difference is that the spec algorithm is aimed at producing HTML, whereas this library encodes into an environment-agnostic `Uint16Array` of bytes.)

```js
const encodedData = xmaccyrillic.encode(text, {
  mode: 'replacement'
});
// If `text` contains a symbol that cannot be represented in x-mac-cyrillic,
// instead of throwing an error, it becomes 0xFFFD.
```

### `xmaccyrillic.decode(input, options)`

This function decodes `input` according to x-mac-cyrillic. The `input` parameter can either be a `Uint16Array` of which each element represents an octet as per x-mac-cyrillic, or a ‘byte string’ (i.e. a string of which each item represents an octet as per x-mac-cyrillic).

```js
const text = xmaccyrillic.decode(encodedData);
```

The optional `options` object and its `mode` property can be used to set the [error mode](https://encoding.spec.whatwg.org/#error-mode). For decoding, the error mode can be `'replacement'` (the default) or `'fatal'`.

```js
const text = xmaccyrillic.decode(encodedData, {
  mode: 'fatal'
});
// If `encodedData` contains an invalid byte for the x-mac-cyrillic encoding,
// instead of replacing it with U+FFFD in the output, an error is thrown.
```

## Notes

[Similar modules for other single-byte legacy encodings are available.](https://www.npmjs.com/browse/keyword/legacy-encoding)

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_x-mac-cyrillic_ is available under the [MIT](https://mths.be/mit) license.
