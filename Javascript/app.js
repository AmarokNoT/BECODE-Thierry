var a = "3";
var b = "8";

/***********Do not change the code above 👆*******/
//Write your code here :
var a = b;
var b = a;
/***********Do not change the code below 👇*******/

console.log("a is " + a);
console.log("b is " + b); 

// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:

console.log(message.toLowerCase().trim())

const nom = "Thierry";

// autre exercice ---------------------------------------------------

let lastIndex = nom[nom.length - 1]

console.log(lastIndex);

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

// YOUR CODE BELOW THIS LINE:

let slice = word.slice(5,10)

let facialHair = slice.replace(slice[1],"e")

console.log(facialHair)

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

for (let i = 2; i <= 20; ) {
    console.log(i);
}