const { succeed, fail, repair } = require('./enhancer.js');
// test away!

test('should repair an items durability to 100', () => {
const durability = 65
  expect(repair(durability)).toBe(100);
})
