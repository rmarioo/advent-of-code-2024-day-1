const distance = require('../src/historian-hysteria'); // Adjust the path as per your structure

test('distance between 1 and 4 should be 3', () => {
    expect(distance(1, 4)).toBe(3);
});
