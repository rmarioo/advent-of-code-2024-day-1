const {sumOfDistance }  = require('../src/historian-hysteria'); // Adjust the path as per your structureconst distanceList = require('../src/historian-hysteria'); // Adjust the path as per your structure



test('distance between unsorted list 1,4 and list 4,9 should be list of 3,5', () => {
    let list1 = [4,1];
    let list2 = [9,4];


    expect(sumOfDistance( {list1, list2 })).toBe(3+5)
});
