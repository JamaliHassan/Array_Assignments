//Question 1 
//creating fruit named Array
var FruitArray = ["Apple", "Orange", "Mango", "Bannana"];
// Question 2
// decleared an Array Containg numbers only.
var numberArray = [10, 20, 30, 40];
// Question 3 
//Accessing  the third element of the fruits array.
console.log(FruitArray[2]);
// Question 4
// Changing the second element of the numbers array to 25:
numberArray[1] = 25;
console.log(numberArray[1]);
// Question 5
// Adding the element "grape" to the end of the fruits array.
FruitArray.push("Grape");
console.log(FruitArray);
// Question 6
// Removing the last element from the fruits array "grape".
FruitArray.pop();
console.log(FruitArray);
// Question 7
// Removing the first element from the fruits array.
FruitArray.shift();
console.log(FruitArray);
// Question 8
// Add the element "kiwi" to the beginning of the fruits array.
FruitArray.unshift("KIWI");
console.log(FruitArray);
// Question 9
// Remove 2 elements from the fruits array starting from index 1
// using the method.
FruitArray.splice(1, 2);
console.log(FruitArray);
// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
FruitArray.splice(1, 0, "pineapple", "pear");
console.log(FruitArray);
// Question 11
// Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.
var citrusFruits = FruitArray.slice(1, 3);
console.log(citrusFruits);
// Question 12
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.
var lastTwoFruits = FruitArray.slice(2, 4);
console.log(lastTwoFruits);
