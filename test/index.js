var test      = require('tap').test,
    niceError = require('../');

test('name, message and stack are normally present', function(t) {
  var myErr, err;

  myErr = new Error('test');
  err   = niceError(myErr);

  t.ok(err.name && err.message && err.stack);
  t.end();
});

test('custom properties should be copied', function(t) {
  var myErr, err;

  myErr      = new Error('oh noes');
  myErr.code = 1101;
  myErr.abc  = 'value';
  err        = niceError(myErr);

  t.ok(err.code && err.abc);
  t.end();
});

test('err.stack is String by default', function(t) {
  var myErr, err;

  myErr = new Error('test');
  err   = niceError(myErr);

  t.equal(typeof err.stack, 'string');
  t.end();
});

test('err.stack is Array when stackToArray flag is set', function(t) {
  var myErr, err;

  myErr = new Error('test');
  err   = niceError(myErr, true);

  t.ok(Array.isArray(err.stack));
  t.end();
});
