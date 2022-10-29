const add = require('./add');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 100 + 20 to equal 120', () => {
  expect(add(100, 20)).toBe(120);
});

test('adds 10 + 20 to not equal 120', () => {
  expect(add(10, 20)).not.toBe(120);
});
