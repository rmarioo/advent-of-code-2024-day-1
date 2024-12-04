const {sumOfDistance,sumOfDistanceFromInputFile,totalSimilarityScore,totalSimilarityScoreFromInputFile }  = require('../src/historian-hysteria');

test('distance between unsorted list 1,4 and list 4,9 should be list of 3,5', () => {
    let left = [4,1];
    let right = [9,4];

    expect(sumOfDistance( {left, right })).toBe(3+5)
});

test('calculare sum of distance from input file', () => {

    expect(sumOfDistanceFromInputFile()).toBe(2742123)
});


test('calculate totalSimilarityScore', () => {
    let left = [4,3,1];
    let right = [3,3,4];

    expect(totalSimilarityScore({left, right})).toBe(  4*1 + 3*2 + 1*0  )
});

test('calculate total similarity score from input file', () => {
    expect(totalSimilarityScoreFromInputFile()).toBe(21328497)
});


