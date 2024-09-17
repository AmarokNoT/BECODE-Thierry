// Algos série1 -----------------------------------------------------------------------------

// exo 0 -----------------------------------------------------------------------------------
// function math(a, b) {
//   if (a == 10 || b == 10 || a + b == 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(math(50, -40));

// exo 1 -------------------------------------------------------------------------------------

// function calcAge(age) {
//   let result = age * 365;
//   return result
// }

// console.log(calcAge(26))

// exo 2 -----------------------------------------

// function addUp(num) {
//   let sum = 0;

//   if (num >= 1 && num <= 1000) {
//     for (let index = 0; index <= num; index++) {
//       sum += index;
//     }
//     return sum;
//   } else {
//     console.log("Ce n'est pas compris entre 1 et 1000")
//   }
// }

// console.log(addUp(90));

// exo 3 --------------------------------------------------

// let myArray = [1, 2, 3, 4, 5];

// function minMax(array) {
//   return [Math.min(...array), Math.max(...array)]
// }

// console.log(minMax(myArray))

// exo 4 ---------------------------------------

// function detectWord(word) {
//   let newWord = '';

//   for (const element of word) {
//     if (element === element.toLowerCase()) {
//       newWord += element;
//     }
//   }
//   return newWord;
// }

// console.log(detectWord("UcUNFYGaFYFYGtNUHfSDFSiSDGSGsh"))

// exo 5 ----------------------------------------------------

// const drinks = [
//   {name: "lemonade", price: 10},
//   {name: "lime", price: 10},
//   {name: "coke", price: 8},
//   {name: "vodka", price: 17},
//   {name: "water", price: 3},
// ]

// function sortDrinkByPrice(array) {
//   return array.sort((a, b) => a.price - b.price);
// }
// console.log(sortDrinkByPrice(drinks))

// exo 6 ----------------------------------------------------

// let animals = { chickens: 2, cows: 4, pigs: 4 };

// function legsAnimals(a,b,c) {
//   let result = a * animals.chickens + b * animals.cows + c* animals.pigs
//   return result
// }

// console.log(legsAnimals(5, 2, 8))

// exo 7 ----------------------------------------------------

// function profitableGamble(probability, prize, pay) {
//   if (probability * prize > pay) {
//     return true;
//   } else {
//     return false;
//   }
// }


// console.log(profitableGamble(0.9, 1, 2))

// exo 8 -------------------------------------------------

// function frames(a,b) {
//   let result = a * ( b * 60)

//   return result
// }

// console.log(frames(10, 25))

// exo 9 ------------------------------------------------

// function calculateFuel(distance) {

//   newDistance = parseFloat(distance)

//   if ( newDistance * 10 > 100) {
//     return newDistance * 10
//   } else {
//     return 100
//   }
// }

// console.log(calculateFuel(23.5))