const clone = require('./cloneObject');

test('clone of object {name: "sam"} equal {name: "sam"}', () => {
  expect(clone({ name: 'sam' })).toEqual({ name: 'sam' });
});
