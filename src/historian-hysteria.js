const _ = require('lodash');
const fs = require('fs');
const path = require('path');


const totalSimilarityScoreFromInputFile= _.flow(
    readListsFromFile,
    sortLists,
    similarityScore,
    _.sum
);
const totalSimilarityScore= _.flow(
    sortLists,
    similarityScore,
    _.sum
);

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

   const left = [];
   const right = [];

   // Process each line
   const lines = fileContent.split(/\r?\n/); // Split by line breaks
   for (const line of lines) {
      if (line.trim()) { // Skip empty lines
         const numbers = parseLine(line); // Parse the line into numbers
         left.push(numbers[0]);
         right.push(numbers[1]);
      }
   }

   return { left, right };
}

function sortLists ({ left, right })  {
   return {
      left: [...left].sort(), // Sort left without mutating the original
      right: [...right].sort(), // Sort right without mutating the original
   };
}

function distanceFromSortedLists({ left, right }) {
   return left.map((val, i) => Math.abs(val - right[i]));
}

function parseLine(line) {
   return line.trim().split(/\s+/)
}

function similarityScore({ left, right }) {
   return left.map((val) => val * right.filter(num => num === val).length)
}


module.exports = {
   sumOfDistance,sumOfDistanceFromInputFile,totalSimilarityScore,totalSimilarityScoreFromInputFile
};
