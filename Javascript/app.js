// var a = "3";
// var b = "8";

// /***********Do not change the code above 👆*******/
// //Write your code here :
// var a = b;
// var b = a;
// /***********Do not change the code below 👇*******/

// console.log("a is " + a);
// console.log("b is " + b);

// // DON'T TOUCH THIS LINE!
// const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// // YOUR CODE BELOW THIS LINE:

// console.log(message.toLowerCase().trim())

// const nom = "Thierry";

// // autre exercice ---------------------------------------------------

// let lastIndex = nom[nom.length - 1]

// console.log(lastIndex);

// // DON'T TOUCH THIS LINE! (please)
// const word = "skateboard"; //Don't change this line!

// // YOUR CODE BELOW THIS LINE:

// let slice = word.slice(5,10)

// let facialHair = slice.replace(slice[1],"e")

// console.log(facialHair)

// exercice sur les nombres ------------------------------------------------------------------

// const city = "Brussels";

// let weatherCondition = "rainy";

// let temperature = 24.16879;

// const weatherText = `The weather in ${city} is ${weatherCondition} and it's ${parseInt(temperature
// )}°C outside`;

// console.log(weatherText); // Prints : The weather in Brussels is rainy and it's 24°C outside.

// // next ------------------------------------------------------------------------------------

// const alias = prompt("What is your name?");

// alert(`Welcome ${alias}!`);

// next --------------------------------------------------------------------------

// const alias = prompt("What is your name?");

// const age = prompt("how old are you?")

// const habitat = prompt("Where do you live?")

// alert(`Welcome ${alias}, you are ${age} years and you live in ${habitat} ! ` )

// next tva -----------------------------------------------------------------------

// let prixSansTVA = parseFloat(prompt("Entrez le prix sans TVA :"));
// let tauxTVA = 0.21;
// let prixAvecTVA = prixSansTVA + (prixSansTVA * tauxTVA);
// alert("Le prix avec TVA de 21% est : " + prixAvecTVA.toFixed(2) + " €");

// next Surface ---------------------------------------------------------------------

// const rayon =parseFloat(prompt("entrez le rayon du cercle"))

// const pi = 3.141592653589793

// const aireDuCercle = pi * (rayon*rayon)

// alert("l'aire de ce cercle est de " + aireDuCercle.toFixed(2))

//next ----------------------------------------------------------------------------

// const firstNum = parseFloat(prompt("Choisissez un numéro"))

// const secondNum = parseFloat(prompt("Choisissez un second numéro"))

// const addition = firstNum + secondNum

// console.log(firstNum)
// console.log(secondNum)

// alert("l'addition des deux donne "+ addition)

// Exercice : Les conditionnels ----------------------------------------------------------

// const prenom = prompt("votre nom ?")

// let choix = prompt("chat ou chien ?")

// if (choix == "chat") {
//     alert(`Bonjour ${prenom}, Vous aimez les chats ? bon choix ! vous êtes une bonne personne`)
// } else {
//     alert(`Bonjour ${prenom}, vous aimez les chiens ? .... c'est bien.`)
// }

//Voiture sans clé -----------------------------------------------------------------------

// let age = parseInt(prompt('quel age avez vous ?'))

// if (age < 18) {
//     alert('Désolé, vous êtes trop jeune pour conduire cette voiture. Coupure du moteur')
// } else if (age == 18 ) {
//     alert('Félicitations pour votre première année de conduite. Profitez du voyage ! ')
// } else {
//     alert('Sous tension. Profitez du voyage !')
// }

// quel fruit -----------------------------------------------------------------------------

// let fruit = prompt("Quel est ton fruit préféré ?").toLowerCase();

// switch (fruit) {
//     case 'bananas':
//         alert("J'aime aussi les bananes !");
//         break;
//     case 'strawberry':
//         alert("j'aime les fraises !");
//         break;
//     case 'grape':
//         let couleur = prompt("Préférez-vous les raisins violets ou verts ?").toLowerCase();
//         switch (couleur) {
//             case 'purple':
//                 alert("Je n'aime pas les raisins violets.");
//                 break;
//             case 'green':
//                 alert("Les raisins verts sont ok...");
//                 break;
//             default:
//                 alert("Je ne comprends pas.");
//         }
//         break;
//     default:
//         alert("Je ne comprends pas le mot : " + fruit);
// }

// Pratique de l'accès aux réseaux ------------------------------------------------------

// const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// // YOUR CODE BELOW HERE:

// leaderboard.splice(1,1,"Luna")
// leaderboard.splice(3,1,"Draco")

// console.log(leaderboard)

// Choix des éléments ---------------------------------------------------------------------

// const initialArray = [
//     null,
//     true,
//     ["Apple", "two", undefined],
//     false,
//     ["three", "BeCode"],
//     4,
//     "I am a big bad wolf",
//     ["one"],
//   ];

// console.log(initialArray.length)

// initialArray.splice(0,9,"one","two","three")

// console.log(initialArray)

// next exercice --------------------------------------------------------------------------------

// const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// // YOUR CODE GOES BELOW THIS LINE:

// planets.shift()
// planets.push("Saturn")
// planets.unshift('Mercury')

// console.log(planets)

// exercice objets ----------------------------------------------------------------------------------------

// const produit = {
//     name : "iphone 15",
//     inStock : true,
//     price : 1249.90 ,
//     includeInPackage : ["case", "écouteurs", "chargeur"]

// }

// console.log(produit.includeInPackage[1])

// Object Access Exercise -----------------------------------------------------------------------------------

//PLEASE DON'T TOUCH THIS LINE!
// const restaurant = {
//     name: "Ichiran Ramen",
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: "Brooklyn",
//     state: "NY",
//     zipcode: "11206",
//   };

//   //YOUR CODE GOES DOWN HERE:

// let fullAdress = restaurant.name +", "+ restaurant.address +", "+ restaurant.city +", "+ restaurant.state +", "+restaurant.zipcode;

// console.log(fullAdress)

// JavaScripts Pour les boucles -------------------------------------------------------------------------------

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
//     }

// ------------------------------------------------------------

// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }

// ----------------------------------------------------------------------

// for (let i = 100; i >= 10; i -= 10) {
//     console.log(i);
// }

// ----------------------------------------------------------------------------

// for (let i = 10; i <= 1000; i = i*10) {
//     console.log(i);
// }

// Boucle tableau ----------------------------------------------------------------------

// const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
// console.log(animals.length)

// for (let index = animals.length-1 ; index >= 0; index--) {
//     console.log(animals[index]) ;
// }

// Un autre -----------------------------------------------------------------------------

// const users = [
//     {
//       firstName: "Vito",
//       lastName: "Corleone",
//     },
//     {
//       firstName: "William",
//       lastName: "Wallace",
//     },
//     {
//       firstName: "Harry",
//       lastName: "Potter",
//     },
//     {
//       firstName: "Amadeus",
//       lastName: "Mozart",
//     },
//     {
//       firstName: "Barack",
//       lastName: "Obama",
//     },
//   ];

// for (let index = 0; index <= users.length; index++) {
//     console.log(`My full name is ${users[index].firstName} ${users[index].lastName}`)
// }

// nested loop ---------------------------------------------------------------

// const seatingChart = [
//     ["Colas", "Benoit", "Elodie"],
//     ["Sola", "Irina", "Antonino", "Eli"],
//     ["John", "Maryna", "Naike", "Fabrice"],
//   ];

//   // I can use nested loops to do that :

//   for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
//         console.log("Row #"+[i+1])
//     for (let j = 0; j < row.length; j++) {
//       console.log(row[j]);
//     }
//   }

// Exercice de boucle de javascript----------------------------------------------------------------------

// let maxNumber;
// let guessNumber;
// let randomNumber;
// let tentative = 0

// do {
//     maxNumber =parseInt(prompt("Veuillez entrer un nombre max :"));
// } while (isNaN(maxNumber) || maxNumber <= 0);

// randomNumber = Math.floor(Math.random()* maxNumber) + 1;

// do {
//     guessNumber = parseInt(prompt("Devinez le nombre entre 1 et " + maxNumber + " :"))
//     tentative = tentative + 1;

//     if (isNaN(guessNumber)) {
//         alert("Ce n'est pas un nombre valide. Veuillez entrer un nombre.");
//     } else if (guessNumber < randomNumber) {
//         alert("Trop bas !");
//     } else if (guessNumber > randomNumber) {
//         alert("Trop haut !");
//     }
// } while (guessNumber !== randomNumber);

// alert("Félicitations ! Vous avez trouvé le nombre " + randomNumber + " en " + tentative + " tentatives.");

// Exercice forOF / forIn -------------------------------------------------------------------------------------------

// let todos = ["manger", "faire les courses", "rompre avec ma femme"];
// let choice;

// do {
//   let choice = prompt(
//     "Choisissez une commande : \n 1.New \n 2.List \n 3.Delete \n 4.Quit"
//   ).toLowerCase();

//   if (choice == "new") {
//     let newTodo = prompt("quel todo ajouter ?");
//     todos.push(newTodo);
//     console.log(todos);
//   } else if (choice == "list") {
//     let index = 0;
//     console.log("****************** Todo List *******************");
//     for (const tod of todos) {
//       console.log(`${index + 1}: ${tod}`);
//       index++;
//     }
//   } else if (choice == "delete") {
//     let todoDelete = parseInt(
//       prompt("quel todo voulez vous supprimer, utilisé son numéro: ")
//     );
//     let supp = todoDelete - 1;
//     if (supp >= 0 && supp < todos.length) {
//       let toDoDelete = todos.splice(supp, 1);
//       console.log(`L'élément supprimé est : ${toDoDelete}`);
//     } else {
//       console.log("Indice invalide");
//     }
//   } else if (choice == "quit") {
//     break;
//   }
// } while (
//   choice !== "new" &&
//   choice !== "list" &&
//   choice !== "delete" &&
//   choice !== "quit"
// );

// Exercice sur les fonctions ----------------------------------------

// function rollDice(faces , times) {
//     for (let index = 1; index <= times; index++) {
//         const result = Math.floor(Math.random() * faces + 1);

//         console.log(`die ${[index]} : ${result}`)

//     }
//   }

// console.log(rollDice(6,4))

// next -------------------------------------------------------------------------------------------------------------------
// caract = prompt("choissisez un caractère")
// times = parseInt(prompt("combien de fois voulez vous que ça se répète ?"))

// function repeat(caract , times) {
//   for (let index = 1; index <= times; index++) {
//     console.log(`${caract}`)
//   }
// }

// if (!isNaN(times)) {
//   console.log(repeat(caract,times))
// } else {
//   console.log("ceci n'est pas un nombre")
// }

// next -----------------------------------------------------------------------------

// firstName = prompt("votre prénom ?")
// lastName = prompt("votre nom ?")

// function greet(firstName,lastName) {
//   for (const letter of lastName) {
//     firstLetter = lastName[0]
//     console.log(`this is ${firstName} ${firstLetter}`)
//   }
// }

// console.log(greet(firstName,lastName))

// next ----------------------------------------------------------------------

// function sum(number1,number2) {
//   let result = number1+number2
//   return result
// }

// number1 = parseInt(1)
// number2 = parseInt(56)

// const myVar = sum(number1,number2)

// console.log(myVar)

// next -----------------------------------------------------------------

// function logs() {
//   console.log("Hello");
//   console.log("World");
//   return 4;
//   console.log("Goodbye");
//   console.log("World");
// }

// const myVariable = logs();

// console.log(myVariable);

// next -----------------------------------------------------------------

// function isShortWeather(degre) {
//   if (degre >= 24) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isShortWeather(5))

// next ---------------------------------------------------------------
// function lastElement(table) {
//   if (table.length === 0) {
//       return null;
//   } else {
//       return table[table.length - 1];
//   }
// }

// console.log(lastElement([1,4,5,8,9,65]))

// next -------------------------------------------------------

// function capitalize(word) {
//   if (word.length === 0) {
//       return word;
//   }
//   return word[0].toUpperCase() + word.slice(1);
// }

// console.log(capitalize("super"))

// next ------------------------------------------------------
// function surArray(arr) {
//   let somme = 0;

//   for (let i = 0; i < arr.length; i++) {
//       somme += arr[i];
//   }
//   console.log(somme);
// }

// const tableau = [1, 2, 3, 4, 5];
// surArray(tableau);

// next -----------------------------------------------------------------

// const weeks = {
//   lundi: 1,
//   mardi: 2,
//   mercredi: 3,
//   jeudi: 4,
//   vendredi: 5,
//   samedi: 6,
//   dimanche: 7,
// };

// function returnDay(choice) {
//   if (choice < 1 || choice > 7) {
//     console.log("ça ne désigne pas un jour de la semaine");
//   } else {
//     for (const keys in weeks) {
//       if (choice == weeks[keys]) {
//         console.log(keys);
//       }
//     }
//   }
// }

// console.log(returnDay(7));

// Expressions de fonctions -------------------------------------

// const define = function (func, times) {
//   for (let index = 1; index <= times; index++) {
//     func();

//   }
// }

// const rollDie = function () {
//   const roll = Math.floor(Math.random() * 6 + 1);
//   console.log(roll);
// };

// console.log(define(rollDie,4));

// object ----------------------------------

// let user = {
//   firstName : "Léon",
//   lastName : "Piernet",
//   age : 28,
//   aYearHasPast : function () {
//     this.age += 1
//   },
//   printAge : function () {
//     console.log(`${user.firstName} ${user.lastName} is ${this.age} years old`)
//   }
// }

// user.aYearHasPast();
// user.aYearHasPast();
// user.printAge()
