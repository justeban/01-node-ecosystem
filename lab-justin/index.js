'use strict';

const greet = require('./lib/greet.js');

const arithmetic = require('./lib/arithmetic.js');

let greeting = greet.greet('John');

let sum = arithmetic.add(3,4);

let difference = arithmetic.sub(5,2);
console.log('Sum is: ', sum);
console.log('Difference is: ', difference);