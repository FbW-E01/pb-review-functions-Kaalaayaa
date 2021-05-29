// Review 5 - Functions
// NOTE! Pay close attention to creating code with good and consistent code style.

// Write a normal function that takes in two numbers and returns the sum of those numbers.
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5,3));

// Write a normal function that takes in a string and returns that string capitalized.
function capitalized(string) {
    return string.toUpperCase();
}
console.log(capitalized("Hello World"));

// Write a normal function that takes in an array and returns the last item in that array.
function lastItem(array) {
    return array[array.length - 1];
}
const fruits = ["Banana", "Apple", "Orange", 3, "Melon", "Watermelon"];

console.log(lastItem(fruits));

// Write an arrow function that takes in an array and returns the first item in that array.
const firstItem = (array) => {
    return array[0];
}

console.log(firstItem(fruits));

// Write an arrow function that takes in a string and returns the last three characters of that string.
const lastThreeChar = (string) => {
    return string.substr(string.length - 3);
}
const greetings = "Good Morning"
console.log(lastThreeChar(greetings));

// Write an arrow function that takes in an array and returns the type of the first item in that array.
const typeofFirstItem = array => {
    return typeof array[0];
}

console.log(typeofFirstItem(fruits));

// Write an arrow function that takes in an array and returns true, if all items in that array have the same type.
const sameType = array => {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (typeof item === typeof item){
        return true;
    }
    }
    
}

console.log(sameType(fruits));

// Print the type of a variable that has a normal function value.
const sum = sum();
console.log(typeof sum);

// Print the type of a variable that has an arrow function value.
const typeofFirstItems = typeofFirstItem();
console.log(typeof typeofFirstItems);

// Write and test a function that takes in two parameters (min and max). That function should return another function that doesn't take in any parameters, but returns a random number between min and max. Effectively your "outer" function is a factory that creates customized random number generator functions.
function randomNumber(min, max){
    
}

// In your own words, explain what are side effects and what is a pure function.
// In your own words, explain what is the difference between functions and methods.
