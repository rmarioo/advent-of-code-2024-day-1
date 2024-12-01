const {distanceList }  = require('../src/historian-hysteria'); // Adjust the path as per your structureconst distanceList = require('../src/historian-hysteria'); // Adjust the path as per your structure

test('distance between list 1,4 and list 4,9 should be list of 3,5', () => {
    let list1 = [1,4];
    let list2 = [4,9];
    let expected = [3,5];

    expect(distanceList(list1, list2)).toStrictEqual(expected);
});


test('distance between unsorted list 1,4 and list 4,9 should be list of 3,5', () => {
    let list1 = [4,1];
    let list2 = [9,4];
    let expected = [3,5];

    expect(distanceList(list1, list2)).toStrictEqual(expected);
});
