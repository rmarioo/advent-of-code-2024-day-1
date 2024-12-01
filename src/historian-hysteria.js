
function distanceList(list1_, list2_) {
   list1= sortList(list1_);
   list2= sortList(list2_);
   return list1.map((value, index) => distance(value, list2[index]));
}

function sortList(list) {
   return list.sort((a, b) => a - b);
}

function distance(a,b) {
   return b - a
}

module.exports = {
   distanceList
};
