"use strict";

/**
* Returns a 'nice' loggable error, with name, stack, message and other custom
* properties you set on the error.
*
*   Example:
*
*     try {
*       b += 2;
*     }
*     catch (err) {
*       err.code = 11011;
*       console.log(niceError(err, true));
*     }
*
*   Output:
*
*     { name: 'ReferenceError',
*       message: 'b is not defined',
*       stack:
*        [ 'ReferenceError: b is not defined',
*          'at Object.<anonymous> (/home/users/alessioalex/node_tests/nice-error/examples/simple.js:4:3)',
*          'at Module._compile (module.js:441:26)',
*          'at Object..js (module.js:459:10)',
*          'at Module.load (module.js:348:31)',
*          'at Function._load (module.js:308:12)',
*          'at Array.0 (module.js:479:10)',
*          'at EventEmitter._tickCallback (node.js:192:40)' ],
*       code: 11011 }
*
* @param {Object} err - error object
* @param {Boolean} stackToArray - by default the stack is a String
*/
function niceifyError(err, stackToArray) {
  var niceError;

  niceError = {
    name    : err.name,
    message : err.message,
    stack   : err.stack
  };

  Object.keys(err).forEach(function(prop) {
    niceError[prop] = err[prop];
  });

  if (stackToArray && niceError.stack && niceError.stack.split) {
    niceError.stack = niceError.stack.split('\n').map(Function.prototype.call, String.prototype.trim);
  }

  return niceError;
};

module.exports = niceifyError;
