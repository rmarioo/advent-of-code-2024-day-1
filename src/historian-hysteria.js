

function distance(a,b) {
   return b - a
}

function distanceList(list1, list2) {
   return list1.map((value, index) => distance(value, list2[index]));
}

module.exports = {
   distanceList
};
