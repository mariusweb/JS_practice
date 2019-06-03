(function(){
"use strict";
// Write Higher Order Arrow Functions
// Use arrow function syntax to compute the square 
// of only the positive integers 
// (decimal numbers are not integers) 
// in the array realNumberArray and store the 
// new array in the variable squaredIntegers.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  // change code below this line
  const squaredIntegers = arr.filter((array) => {
    if(array > 0){
      return Number.isInteger(array);
    }
  }).map((array) => {
    return array ** 2;
  });
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

}());