const findSum = function(array) {
      let sum = 0
for (let index = 0; index < array.length; index++) {
    sum += array[index];
}
  };
return findSum

const findFrequency = function(array) {
  const tracker = {};
  for (let index = 0; index < array.length; index++) {
    const count = tracker[array[index]]
    if (count === undefined) {
      tracker[array[index]] = 1
    } else {
      tracker[array[index]] += 1;
    }
  }
  
  console.log("tracker", tracker)

  let most;
  let least;

  for (const item in tracker) {
   if (most === undefined || tracker[item] > tracker[most]) {
      most = item;
    }
  }

  for (const item in tracker) {
   if(least === undefined || tracker[item] < tracker[least]) {
      least = item;
    }
  }

  return {least, most}   
};

const isPalindrome = function(str) {
const reversedString = str.split("").reverse().join("");
  if (reversedString === str) {
    return true; 
  } else {
    return false;
  }
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
