function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  let remuve = arr.shift();
  return remuve;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1){
    return names[0];
  }else if(strokes <= par -2){
    return names[1];
  }else if(strokes <= par -1){
    return names[2];
  }else if(strokes == par){
    return names[3];
  }else if(strokes <= par +1){
    return names[4];
  }else if(strokes <= par +2){
    return names[5];
  }else{
    return names[6];
  }
  
  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);


var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count--;
    break;
  }
  if(count > 0){
    return count + " Bet";
  }else{
    return count + " Hold";
  }



  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');


//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  for(let i = 0; i < contacts.length; i++){
   if(contacts[i].firstName === name){
     if(contacts[i].hasOwnProperty(prop)){
       return contacts[i][prop];
     }else{
       return "No property fond";
     }
   }
  }
  return "No contacts fond";
// Only change code above this line
}

// Change these values to test your function
let tomas = lookUpProfile("Akira", "likes");

console.log(tomas);
//console.log(lookUpProfile("Akira", "likes"));

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}
var myRandom = randomRange(5, 15);
console.log(myRandom);

function convertToInteger(str) {
  return parseInt(str, 2);
}

let as = convertToInteger("1012");

console.log(as);

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  
  const squaredIntegers = arr.filter((array) => {if(array > 0){
    return Number.isInteger(array);}
      } ).map((arra) => {
    return arra ** 2;
  });
  
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const sum = (function() {
  "use strict";
  return function sum(...args) {
    
    return args.reduce((args, b) => args + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6


const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray =  [`<li class="text-warning">${arr[0]}</li>`,
    `<li class="text-warning">${arr[1]}</li>`, 
    `<li class="text-warning">${arr[2]}</li>`];
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);


function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable{
    constructor(targetPlanet){
      this.name = targetPlanet;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'


let myString = "Hello, World!";
let myRegex = /Hello/;
let myRegexresult = myRegex.test(myString);
console.log(myRegexresult);
