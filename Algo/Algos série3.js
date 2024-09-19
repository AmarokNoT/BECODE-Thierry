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

// exo 5 ----------------------------------------------

// function convert(str) {
//   let array = str.toLowerCase().split("");
//   let number = parseInt(array.slice(0, 2).join(""));
//   let cOfF = array.slice(2).join("");

//   if (array.includes("c") == true) {
//     let numberFar = (9 / 5) * number + 32;
//     let result = parseInt(numberFar);
//     return `${result}${cOfF}`;
//   } else if (array.includes("f") == true) {
//     let numberCel = (5 / 9) * (number - 32);
//     let result = parseInt(numberCel);
//     return `${result}${cOfF}`;
//   } else {
//     return "error";
//   }
// }
// exo 5 amélioré -------------------------------------------

// function convert(str) {
//   let lowerStr = str.toLowerCase();

//   // Extraire le nombre en prenant tous les caractères sauf le dernier
//   let number = parseFloat(lowerStr.slice(0, -2));

//   // Extraire l'unité (dernier caractère)
//   let unit = lowerStr.slice(-2);

//   // Vérifie si l'unité est en degrés Celsius
//   if (unit === "°c") {
//     // Convertir Celsius en Fahrenheit
//     let numberFar = (9 / 5) * number + 32;
//     // Retourner le résultat arrondi avec "°F"
//     return `${Math.round(numberFar)}°F`;
//   }
//   // Vérifie si l'unité est en degrés Fahrenheit
//   else if (unit === "°f") {
//     // Convertir Fahrenheit en Celsius
//     let numberCel = (5 / 9) * (number - 32);
//     // Retourner le résultat arrondi avec "°C"
//     return `${Math.round(numberCel)}°C`;
//   }
//   // Si l'unité est incorrecte ou manquante
//   else {
//     return "Error";
//   }
// }

// console.log(convert("35°C"));
// console.log(convert("110°F"));
// console.log(convert("33"));

// exo 6 -----------------------------------------------------------

function findBrokenKeys(str1,str2) {
    let supposedTyped = str1.split("")
    let actuallyTyped = str2.split("")
    const brokenKeys = new Set();

    // console.log(supposedTyped,actuallyTyped,brokenKeys)

    for (let i = 0; i < supposedTyped.length; i++) {
        if (supposedTyped[i] !== actuallyTyped[i]) {
            brokenKeys.add(supposedTyped[i]);
        }
    }
    return Array.from(brokenKeys)
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"))
console.log(findBrokenKeys("starry night", "starrq light"))
console.log(findBrokenKeys("beethoven", "affthoif5"))