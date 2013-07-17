var niceError = require('../');

try {
  b += 2;
}
catch (err) {
  err.code = 11011;
  console.log(niceError(err, true));
}
