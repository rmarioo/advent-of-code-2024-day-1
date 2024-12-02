const {sumOfDistance,sumOfDistanceFromInputFile }  = require('../src/historian-hysteria');

test('distance between unsorted list 1,4 and list 4,9 should be list of 3,5', () => {
    let list1 = [4,1];
    let list2 = [9,4];

    expect(sumOfDistance( {list1, list2 })).toBe(3+5)
});

test('calculare sum of distance from input file', () => {

    let number = sumOfDistanceFromInputFile();
    expect(number).toBe(2742123)
});
