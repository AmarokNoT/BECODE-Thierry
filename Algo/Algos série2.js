// exo 0 ----------------------------------------

// let print = 0

// function countTrue(params) {
//     for (let index = 0; index < params.length; index++) {
//         if (params[index] === true) {
//             print ++
//         }
//     }

//     return print
// }

// console.log(countTrue([true, true, false, true, false]))

// exo 1 ----------------------------------------

// function canReachBonus(a, b) {

//     if (a === b) {
//         return false;
//     }
//     const difference = b - a;

//     return difference >= 1 && difference <= 6;
// }

// console.log(canReachBonus(4,3))

// exo 2 ----------------------------------------

// function num_of_digits(number) {
//     let newNumber = String(number)
//     let num = 0
//     for (const element of newNumber) {
//         num ++
//     }
//     return num
// }

// console.log(num_of_digits(12564564))

// exo 3 ----------------------------------------

// function toArray(obj) {
//     let result = Object.entries(obj)
//     return result ;
// }
// console.log(toArray({}))

// exo 4 ----------------------------------------

// let number = 0

// function arrayOfMultiple(a, b) {
//     for (let index = 1; index <= b; index++) {
//         number = a * index
//         console.log(number)
//     }
// }

// console.log(arrayOfMultiple(12, 10))

// exo 5 ----------------------------------------------

// function removeLeadingTrailing(num) {
//     let result = parseFloat(num).toString();
//     return result === "NaN" || result === "" ? "0" : result;
// }

// console.log(removeLeadingTrailing(230.000))
// console.log(removeLeadingTrailing('230.000'))
// console.log(removeLeadingTrailing('03.1400'))
// console.log(removeLeadingTrailing(30))

// exo 6 --------------------------------------------------

// function sortIt(array) {
//     return array.sort((a, b) => {
//         const valA = Array.isArray(a) ? a[0] : a;
//         const valB = Array.isArray(b) ? b[0] : b;
//         return valA - valB;
//     });
// }

// console.log(sortIt([3, [4], 2, [1]]))

// exo 7 -----------------------------------------------

// function calculator(numA, operat, numB) {
//   if (numB === 0) {
//     return console.log("Ne peut pas diviser par 0");
//   } else {
//     let result = eval(`${numA} ${operat} ${numB}`)
//     return result;
//   }
// }

// console.log(calculator(2, "/", 0));

// exo 8 -----------------------------------------------
// function proportionSuperficiePays(nomPays, superficiePays) {
//   const superficieTotaleTerres = 148940000;
//   const proportion = (superficiePays / superficieTotaleTerres) * 100;
//   const proportionArrondie = proportion.toFixed(2);
//   return `La superficie de ${nomPays} représente ${proportionArrondie}% de la masse terrestre mondiale.`;
// }

// console.log(proportionSuperficiePays("France", 551695)); 

// exo 9 ------------------------------------
function inverserChaine(input) {
    // Étape 1 : Supprimer les espaces superflus
    let trimmedInput = input.trim(); // Enlève les espaces de début et de fin
    let wordsArray = trimmedInput.split(/\s+/); // Divise par un ou plusieurs espaces

    // Étape 2 : Inverser les mots
    let reversedArray = wordsArray.reverse();

    // Étape 3 : Joindre les mots avec un espace
    let reversedString = reversedArray.join(' ');

    return reversedString; // Retourne la chaîne inversée
}

// Exemple d'utilisation
let inputString = "  Bonjour   tout le monde   ";
let result = inverserChaine(inputString);
console.log(result); // Affiche : "monde le tout Bonjour"
