const _ = require('lodash');

function sortLists ({ list1, list2 })  {
   return {
      sortedList1: [...list1].sort(), // Sort list1 without mutating the original
      sortedList2: [...list2].sort(), // Sort list2 without mutating the original
   };
};


function distanceSorted({ sortedList1, sortedList2 }) {
   return sortedList1.map((val, i) => Math.abs(val - sortedList2[i]));
}

const sumOfDistance= _.flow(
    sortLists,
    distanceSorted,
    _.sum
);

module.exports = {
   sumOfDistance
};
