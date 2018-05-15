'use strict';

const greet = require('../../lib/greet.js');

const assert = require('assert');

let message = '';

message = greet.greet();
assert.strictEqual(message, null, 'One name is required');

message = greet.greet('john', 'cathy');
assert.strictEqual(message, null, 'Only One parameter is permitted');

message = greet.greet(1);
assert.strictEqual(message, null, 'Numeric Values Should Not Be Permitted');

message = greet.greet([]);
assert.strictEqual(message, null, 'Arrays Should Not Be Permitted');

message = greet.greet({});
assert.strictEqual(message, null, 'Objects Should Not Be Permitted');

message = greet.greet('John');
assert.strictEqual(message, 'hello John', `Output string does not match required (actual: "${message}", expected: "hello John")`);
