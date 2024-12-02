const _ = require('lodash');
const fs = require('fs');
const path = require('path');


const sumOfDistanceFromInputFile= _.flow(
    readListsFromFile,
    sortLists,
    distanceFromSortedLists,
    _.sum
);

const sumOfDistance= _.flow(
    sortLists,
    distanceFromSortedLists,
    _.sum
);

function readListsFromFile() {
   const filePath = path.join(__dirname, 'input.txt');
   console.log("file path is " + filePath);

   // Read the entire file synchronously
   const fileContent = fs.readFileSync(filePath, 'utf-8');

   const list1 = [];
   const list2 = [];

   // Process each line
   const lines = fileContent.split(/\r?\n/); // Split by line breaks
   for (const line of lines) {
      if (line.trim()) { // Skip empty lines
         const numbers = parseLine(line); // Parse the line into numbers
         list1.push(numbers[0]);
         list2.push(numbers[1]);
      }
   }

   return { list1, list2 };
}

function sortLists ({ list1, list2 })  {
   return {
      sortedList1: [...list1].sort(), // Sort list1 without mutating the original
      sortedList2: [...list2].sort(), // Sort list2 without mutating the original
   };
}

function distanceFromSortedLists({ sortedList1, sortedList2 }) {
   return sortedList1.map((val, i) => Math.abs(val - sortedList2[i]));
}

function parseLine(line) {
   return line.trim().split(/\s+/)
}

module.exports = {
   sumOfDistance,readListsFromFile,sumOfDistanceFromInputFile
};
