'use strict';

const arithmetic = require('../../lib/arithmetic.js');

const assert = require('assert');

let message = '';

message = arithmetic.add();
assert.strictEqual(message, null, 'Two Parameters Are Required');

message = arithmetic.add(1);
assert.strictEqual(message, null, 'Two Parameters Are Required');

message = arithmetic.add('john', 'cathy');
assert.strictEqual(message, null, 'Only Numberic Parameters Are Permitted');

message = arithmetic.add(2, 'cathy');
assert.strictEqual(message, null, 'Only Numberic Parameters Are Permitted');

message = arithmetic.add([], []);
assert.strictEqual(message, null, 'Arrays Should Not Be Permitted');

message = arithmetic.add({}, {});
assert.strictEqual(message, null, 'Objects Should Not Be Permitted');

message = arithmetic.add(2, 2);
assert.strictEqual(message, 4, `Output string does not match required (actual: "${message}", expected: 4)`);

message = arithmetic.sub();
assert.strictEqual(message, null, 'Two Parameters Are Required');

message = arithmetic.sub(1);
assert.strictEqual(message, null, 'Two Parameters Are Required');

message = arithmetic.sub('john', 'cathy');
assert.strictEqual(message, null, 'Only Numberic Parameters Are Permitted');

message = arithmetic.sub(2, 'cathy');
assert.strictEqual(message, null, 'Only Numberic Parameters Are Permitted');

message = arithmetic.sub([], []);
assert.strictEqual(message, null, 'Arrays Should Not Be Permitted');

message = arithmetic.sub({}, {});
assert.strictEqual(message, null, 'Objects Should Not Be Permitted');

message = arithmetic.sub(7, 5);
assert.strictEqual(message, 2, `Output string does not match required (actual: "${message}", expected: 2)`);