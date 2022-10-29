const sub = require('./sub');

test('sub 10 - 5 to equal 5', () => {
  expect(sub(10, 5)).toBe(5);
});

test('sub 100 - 5 to not equal 2', () => {
  expect(sub(100, 5)).not.toBe(2);
});
