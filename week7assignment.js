// week 7 assignment

console.log(`-------------------------- 
    Question 1: Create an array called ages`);

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//step a : Programmatically subtract the value of the first element in the array from the value in the last element of the array.

let firstElement = ages[0];
let lastElement = ages[ages.length - 1];
let substractElement = lastElement - firstElement;

console.log("Step a: ", `The result : ${substractElement}`);

//step b: Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages = [3, 9, 23, 64, 2, 8, 28, 93];

// adding a new age in the array
ages.unshift(15);

//substracting fisrt element from the last element
firstElement = ages[0];
lastElement = ages[ages.length - 1];
substractElement = lastElement - firstElement;
console.log("Step b: ", `The result : ${substractElement}`);

//step c: Use a loop to iterate through the array and calculate the average age

// finding the summation of all ages
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
// calculating average

let averageAge = sum / ages.length;

console.log("Step c: ", `Average age : ${averageAge}`);

console.log(`-------------------------- 
    Question 2: Create an array called names`);

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// step a : Use a loop to iterate through the array and calculate the average number of letters per name.

//calculating total number of letters
totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
// calculating average

let averageNumber = totalLetters / names.length;

console.log(
  "Step a: ",
  `Average number of letters per name : ${averageNumber}`
);

//step b: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

concatenatedNames = 0;
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i].concat;
}
console.log("Step b: ", `concatenated names : ${concatenatedNames}`);

console.log(`-------------------------- 
    Question 3: How do you access the last element of any array?`);

console.log(
  `To access the last element of any array, you use [array.length - 1]. it is more elaborated on question 1`
);

console.log(`-------------------------- 
    Question 4: How do you access the first element of any array?`);

console.log(`To access the first element of any array, you use the name of that particular array followed by the number
of the index wich is 0 in this case. Example that is elaborated on question 1 firstElement = ages[0]`);

console.log(`-------------------------- 
    Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.`);

names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//Loop  the names array and add lengths to nameLengths array
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}
console.log(nameLengths);

console.log(`-------------------------- 
    Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);

//loop the nameLenghts array and calculate sum of all elemets
sum = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sum += nameLengths[i];
}
console.log(`The sum of all elements in the array : ${sum}`);

console.log(`-------------------------- 
    Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello')..`);

//function concatenatedWord (word,n){
// let n = number;
// for (let i = 0, i < n; i++){
//      concatenatedWord += word;
//  }
//  return concatenatedWord;
//}

console.log(`-------------------------- 
    Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`);

function fullName(firstName, lastName) {
  return `${firstName}, ${lastName}`;
}
// examples
let result = fullName("john", "Smith");
console.log(result);

console.log(`-------------------------- 
    Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);

function numberSummation(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum > 100;
}
//examples 1
let number1 = [10, 30, 60, 22, 3];
console.log(numberSummation(number1));

//example 2
let number2 = [10, 30, 5, 22, 3];
console.log(numberSummation(number2));

console.log(
  `----question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.`
);
function average(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  // calculating average

  let average = sum / number.length;
  return average;
}
//examples 1
let number3 = [10, 12, 33, 56, 11, 3];
console.log(average(number3));

console.log(
  `----question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`
);

function averageTwoArray(num1, num2) {
  // this is the calculation of array number 1
  let sum1 = 0;
  for (let i = 0; i < num1.length; i++) {
    sum1 += num1[i];
  }
  // calculating average

  let averagenum1 = sum1 / num1.length;

  // this is the calculation of array number 2

  let sum2 = 0;
  for (let i = 0; i < num2.length; i++) {
    sum2 += num2[i];
  }
  // calculating average

  let averagenum2 = sum2 / num2.length;

  // returning a boolean if average from array number 1 is greater than  average from array number 2

  if (averagenum1 > averagenum2) {
    return true;
  } else {
    return false;
  }
}
//examples 1
let num1 = [10, 30, 60, 22, 3];
let num2 = [10, 30, 5, 22, 3];
console.log(averageTwoArray(num1, num2));

//examples 2
let num4 = [10, 30, 60, 22, 3];
let num3 = [10, 30, 5, 22, 3];
console.log(averageTwoArray(num3, num4));

console.log(
  `---Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`
);
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket > 10.5) {
    return true;
  } else {
    return false;
  }
}

console.log(
  `--- Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`
);

function buyNewCouch(budget, costOfCouch) {
  if (costOfCouch <= budget) {
    return "you can buy a new couch";
  } else {
    return "consider saving more or look for another option which is less expensive";
  }
}
console.log(buyNewCouch);

//example 1
let budget = 1500;
let costOfCouch = 2000;
console.log(buyNewCouch(1500, 2000));

//example 2
budget = 2500;
costOfCouch = 2000;
console.log(buyNewCouch(2500, 2000));

//I created a function helping someone to decide buying a new couch based on the budget and also the cost of that particular new couch.//
//It checks affordability but also provide recommendation based on provided parameters//

//it takes two parameters budget and cost of couch  all are numbers. budget will check the the available money to purhase and cost of couch consider the price.//

// why i created it
//when buying a couch or any other furniture, it involves balancing between personal budget against preferences to confort and style.//
//This function offers a clear recommendation to make decision about purchasing a new couch without going over budget.//
// The function helps to make decision based on affordability.//
