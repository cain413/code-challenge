const findSum = function(array) {
      let sum = 0
for (let index = 0; index < array.length; index++) {
    sum += array[index];
}
  };
return Sum

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
  let largest = array[0] * array[1];
    for (let i = 0; i < array.length - 1; i++) {
      const product = array[i] * array[i + 1];
      if(product > largest){
        largest = product;
      }
    }
    return largest
};

const removeParenth = function(str) {
  let stringWithoutParantheses = removeParenth.replaceAll(/[{()}[\]]/g, '');
      console.log("Orginal String:" + removeParenth);
      console.log("Final String:" + stringWithoutParantheses)
      return stringWithoutParantheses
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
