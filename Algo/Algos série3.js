// exo 0 -----------------------------------------

// function oddishOrEvenish(params) {
//   let somme = params
//     .toString()
//     .split("")
//     .reduce((acc, chiffre) => acc + parseInt(chiffre), 0);

//   let result = somme % 2;

//   if (result == 1) {
//     return "oddish";
//   } else {
//     return "Evenish";
//   }
// }

// console.log(oddishOrEvenish(4433));

// exo 1 ---------------------------------------

// function getTotalPrice(obj) {
//     let finalPrice = 0
//     for (let index = 0; index < obj.length; index++) {
//         let prices = obj[index].quantity * obj[index].price 
        
//         finalPrice += prices
        
//     }
//     return parseFloat(finalPrice)
// }

// console.log(getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
//   ]))

// exo 2 ---------------------------------------

// function reverseOdd(sentence) {
//   let words = sentence.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];

//     if (word.length % 2 !== 0) {
//       words[i] = word.split("").reverse().join("");
//     }
//   }

//   return words.join(" ");
// }

// console.log(reverseOdd("One two three four"));

// exo 3 ---------------------------------------

// function isSmooth(str) {
//   let words = str.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     const lastChar = words[i].toLowerCase().slice(-1);
//     const firstCharNext = words[i + 1].toLowerCase().charAt(0);

//     if (lastChar !== firstCharNext) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));

// exo 4 ----------------------------------------------

// function sevenBoom(array) {

//   let NewArray = array.join("").split("");

//   if (NewArray.includes("7") !== true) {
//     return console.log("there is no 7 in the array");
//   } else {
//     return console.log("BOOM!");
//   }
// }

// console.log(sevenBoom([2, 55, 60, 97, 86]));