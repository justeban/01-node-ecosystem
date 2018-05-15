'use strict';

module.exports = exports = {};

exports.add = (...args) => {
  if (args.length !== 2) {return null;}
  if (typeof(args[0]) !== 'number' || typeof(args[1]) !== 'number') {return null;}
  return args[0] + args[1];
};

exports.sub = (...args) => {
  if (args.length !== 2) { return null; }
  if (typeof (args[0]) !== 'number' || typeof (args[1]) !== 'number') { return null; }
  return args[0] - args[1];
};