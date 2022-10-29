const { add, sub } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 100 + 20 to equal 120', () => {
  expect(add(100, 20)).toBe(120);
});

test('adds 10 + 20 to not equal 120', () => {
  expect(add(10, 20)).not.toBe(120);
});
test('sub 10 - 5 to equal 5', () => {
  expect(sub(10, 5)).toBe(5);
});

test('sub 100 - 5 to not equal 2', () => {
  expect(sub(100, 5)).not.toBe(2);
});
