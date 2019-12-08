"use strict";

function findLongestWord(string) {
  const stringArray = string.split(" ");
  let longestWord = stringArray[0];

  for (let i = 0; i < stringArray.length ; i++) {
    if (longestWord.length < stringArray[i].length) {
      longestWord = stringArray[i];
    }
  }
  return longestWord
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
