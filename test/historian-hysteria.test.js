const {distanceList }  = require('../src/historian-hysteria'); // Adjust the path as per your structureconst distanceList = require('../src/historian-hysteria'); // Adjust the path as per your structure


test('distance between list 1 and list 4 should be list of 3', () => {
    let list1 = [1];
    let list2 = [4];
    let expected = [3];

    expect(distanceList(list1, list2)).toStrictEqual(expected);
});
