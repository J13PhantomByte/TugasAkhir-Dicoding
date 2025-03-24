const assert = require('assert');
const sum = require('./index.js');

test('sums two positive numbers', () => {
  assert.strictEqual(sum(1, 2), 3);
});

test('returns 0 if either argument is not a number', () => {
  assert.strictEqual(sum('a', 2), 0);
  assert.strictEqual(sum(1, 'b'), 0);
  assert.strictEqual(sum('a', 'b'), 0);
});

test('returns 0 if either argument is negative', () => {
  assert.strictEqual(sum(-1, 2), 0);
  assert.strictEqual(sum(1, -2), 0);
  assert.strictEqual(sum(-1, -2), 0);
});

test('sums zero with positive numbers', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test('returns 0 if both arguments are 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});