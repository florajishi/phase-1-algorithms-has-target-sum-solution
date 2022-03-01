// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   const previousValues = {}
//   for(let i = 0; i < array.length; i++){
//     const currentNumber = array[i]
//     const neededValue = target - currentNumber
//     const index2 = previousValues[neededValue]
//     if(index2 != null){
//       return true
//     } else {
//       previousValues[currentNumber] = i
//     }
//   }
//   return false
// }
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize empty Set
  //Set objects are collections of values that can only be used once
  //good for keeping track of unique values, or to compare to the Object type, only the KEYS
  for(const number of array){
    const complement = target - number;

    if(seenNumbers.has(complement)) return true;
    seenNumbers.add(number)
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
