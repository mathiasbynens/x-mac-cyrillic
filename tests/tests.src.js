const assert = require('assert');

const xmaccyrillic = require('../x-mac-cyrillic.js');

console.log('Testing `xmaccyrillic.encode`…');
assert.strictEqual(
	xmaccyrillic.encode('\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F'),
	'\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F',
	'U+0000 to U+007F remain unchanged'
);
assert.strictEqual(
	xmaccyrillic.encode(<%= decoded %>),
	<%= encoded %>,
	'Encoding all other symbols in the character set'
);
assert.throws(
	() => {
		xmaccyrillic.encode('\uFFFF');
	},
	Error,
	'Encoding a code point that is invalid for this encoding throws an error in `fatal` mode, which is the implied default for `encode()`'
);
assert.throws(
	() => {
		xmaccyrillic.encode('\uFFFF', { mode: 'fatal' });
	},
	Error,
	'Encoding a code point that is invalid for this encoding throws an error in `fatal` mode'
);
assert.throws(
	() => {
		xmaccyrillic.encode('\uFFFF', { mode: 'FATAL' });
	},
	Error,
	'Mode names are case-insensitive'
);
assert.throws(
	() => {
		xmaccyrillic.encode('\uFFFF', { mode: 'fAtAl' });
	},
	Error,
	'Mode names are case-insensitive'
);
assert.strictEqual(
	xmaccyrillic.encode('\uFFFF', { mode: 'html' }),
	'&#65535;',
	'Encoding a code point that is invalid for this encoding returns an HTML entity in `html` mode'
);
assert.strictEqual(
	xmaccyrillic.encode('\uFFFF', { mode: 'HTML' }),
	'&#65535;',
	'Mode names are case-insensitive'
);
assert.strictEqual(
	xmaccyrillic.encode('\uFFFF', { mode: 'hTmL' }),
	'&#65535;',
	'Mode names are case-insensitive'
);

console.log('Testing `xmaccyrillic.decode`…');
assert.strictEqual(
	xmaccyrillic.decode('\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F'),
	'\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F',
	'U+0000 to U+007F remain unchanged'
);
assert.strictEqual(
	xmaccyrillic.decode(<%= encoded %>),
	<%= decoded %>,
	'Decoding all other symbols in the character set'
);
assert.strictEqual(
	xmaccyrillic.decode('\uFFFF'),
	'\uFFFD',
	'Decoding a byte that is invalid for this encoding returns U+FFFD in `replacement` mode, which is the implied default for `decode()`'
);
assert.strictEqual(
	xmaccyrillic.decode('\uFFFF', { mode: 'replacement' }),
	'\uFFFD',
	'Decoding a byte that is invalid for this encoding returns U+FFFD in `replacement` mode'
);
assert.strictEqual(
	xmaccyrillic.decode('\uFFFF', { mode: 'REPLACEMENT' }),
	'\uFFFD',
	'Mode names are case-insensitive'
);
assert.strictEqual(
	xmaccyrillic.decode('\uFFFF', { mode: 'rEpLaCeMeNt' }),
	'\uFFFD',
	'Mode names are case-insensitive'
);
assert.throws(
	() => {
		xmaccyrillic.decode('\uFFFF', { mode: 'fatal' });
	},
	Error,
	'Decoding a byte that is invalid for this encoding throws an error in `fatal` mode'
);
assert.throws(
	() => {
		xmaccyrillic.decode('\uFFFF', { mode: 'FATAL' });
	},
	Error,
	'Decoding a byte that is invalid for this encoding throws an error in `fatal` mode'
);
assert.throws(
	() => {
		xmaccyrillic.decode('\uFFFF', { mode: 'fAtAl' });
	},
	Error,
	'Mode names are case-insensitive'
);
