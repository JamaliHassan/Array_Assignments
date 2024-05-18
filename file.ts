//Question 1 
//creating fruit named Array.

let FruitArray:string [] = ["Apple", "Orange", "Mango", "Bannana"];

// Question 2
// Declare an array named numbers that can contain only number elements and initialize it with the values 10, 20, 30, and 40.

let numberArray:number [] = [10 ,20 , 30, 40 ];

// Question 3 
// Access the third element of the fruits array and assign it to a variable named thirdFruit.

console.log(FruitArray[2]);

// Question 4
// Change the second element of the numbers array to 25.

numberArray[1] = 25
console.log(numberArray[1]);

// Question 5
// Add the element "grape" to the end of the fruits array using the method.

FruitArray.push("Grape");
console.log(FruitArray);

// Question 6
// Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.

FruitArray.pop();
console.log(FruitArray);

// Question 7
// Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.

FruitArray.shift();
console.log(FruitArray);

// Question 8
// Add the element "kiwi" to the beginning of the fruits array using the method.

FruitArray.unshift("KIWI");
console.log(FruitArray);

// Question 9
// Remove 2 elements from the fruits array starting from index 1 using the method.

FruitArray.splice(1,2)
console.log(FruitArray);

// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.

FruitArray.splice(1,0, "pineapple" , "pear");
console.log(FruitArray);

// Question 11
// Create a new array named citrusFruits that contains the firsttwo elements of the fruits array using the method.

let  citrusFruits  = FruitArray.slice(1, 3);
console.log(citrusFruits);


// Question 12
// Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.

let lastTwoFruits = FruitArray.slice(2,4);
console.log(lastTwoFruits);


