# nice-error

### Description

Node.js module for making errors loggable / readable / serializable etc.

### Motivation

Since Node 0.6.x error properties are not enumerable, so console.log(error) would not log what you'd expect.

See:

- https://gist.github.com/indexzero/1553662
- https://github.com/flatiron/winston/issues/138

### Installation

```bash
npm install nice-error
```

### Examples

```js
var niceError = require('nice-error');
try {
  b += 2;
}
catch (err) {
  err.code = 11011;
  // second parameter is stack should be converted into an Array (default is String)
  console.log(niceError(err, true));
}
```

Output:

```js
{ name: 'ReferenceError',
  message: 'b is not defined',
  stack:
   [ 'ReferenceError: b is not defined',
     'at Object.<anonymous> (/home/users/alessioalex/node_tests/nice-error/examples/simple.js:4:3)',
     'at Module._compile (module.js:441:26)',
     'at Object..js (module.js:459:10)',
     'at Module.load (module.js:348:31)',
     'at Function._load (module.js:308:12)',
     'at Array.0 (module.js:479:10)',
     'at EventEmitter._tickCallback (node.js:192:40)' ],
  code: 11011 }
```

### Tests

```bash
npm test
```

## License

MIT
