/*The slice() method is commonly used when you want to work with a subset of an array without modifying the original array.*/
const originalArray = [1, 2, 3, 4, 5];
const slicedArray = originalArray.slice(1, 4);

console.log(slicedArray); // Output: [2, 3, 4]
console.log(originalArray); // Output: [1, 2, 3, 4, 5]

/*The splice() method is commonly used when you need to insert, replace, or remove elements from an array at specific positions. It offers a way to perform more complex array modifications compared to the push(), pop(), shift(), and unshift() methods, which are used for simpler operations at the ends of arrays.*/
const originalArray = [1, 2, 3, 4, 5];
const removedElements = originalArray.splice(1, 2);

console.log(removedElements); // Output: [2, 3]
console.log(originalArray); // Output: [1, 4, 5]

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
/* ARROW FUNCTION*/
const sum = (a, b) => a + b;
console.log(sum(3, 7)); // Output: 10

/*First class function: 
First-class functions means when functions in that language are treated like any other variable.*/
function firstName(){
    return "Hassan";
  }
  function lastName(){
    return "Hafeez";
  }
  
  function displayName(firstName,lastName){
    console.log("Hey! ",firstName(),lastName())
  }
  displayName(firstName,lastName);

/*IIFE*/
(function() {
    const message = "Hello from IIFE!";
    console.log(message);
})();
// Output: Hello from IIFE!

