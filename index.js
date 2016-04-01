const through = require('through2');
const leftpad = require('left-pad');

module.exports = function(pad) {
  return through((chunk, enc, cb) => {
    cb(null, leftpad(chunk, pad));
  });
}

