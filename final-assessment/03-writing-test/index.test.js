import { test, expect } from 'bun:test';
import { sum } from './index.js';

test('sums two numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-1, 1)).toBe(0);
  expect(sum(0, 0)).toBe(0);
  expect(sum(-5, 2)).toBe(-3);
});