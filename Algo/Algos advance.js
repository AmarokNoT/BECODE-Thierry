// exo 0 -----------------------------------------------------
// function countNum(num) {
//     for (let index = 1; index <= num ; index++) {
//         if (index % 3 === 0 && index % 5 === 0 ) {
//             console.log("FizzBuzz")
//         } else if (index % 3 === 0) {
//             console.log("Fizz")
//         } else if (index % 5 === 0){
//             console.log("Buzz")
//         } else {
//             console.log(index)
//         }
//     }
// }

// countNum(30)

// exo 1-----------------------------------------------------

// function ransomNote(noteText, magazineText) {
//   let wordMap = new Map();
//   let words = noteText.split(" ");

//   let wordMap1 = new Map();
//   let words1 = magazineText.split(" ");

//   words.forEach((word) => {
//     if (wordMap.has(word)) {
//       wordMap.set(word, wordMap.get(word) + 1);
//     } else {
//       wordMap.set(word, 1);
//     }
//   });

//   words1.forEach((word1) => {
//     if (wordMap1.has(word1)) {
//       wordMap1.set(word1, wordMap1.get(word1) + 1);
//     } else {
//       wordMap1.set(word1, 1);
//     }
//   });

//   for (let [word, count] of wordMap) {
//     if (!wordMap1.has(word) || wordMap1.get(word) < count) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(
//   ransomNote(
//     "this is a secret note to you from a secret admirer",
//     "this is a note secret to you from a admirer secret"
//   )
// );

// exo 2------------------------------------

// function isPalindrome(str) {
//     let strArray = str.trim().toLowerCase().split("").filter(char => /[a-z0-9]/.test(char)).join('').split("")
//     let strArrayReverse = [...strArray].reverse()

//     for (let index = 0; index < strArray.length; index++) {
//         if (strArray[index] === strArrayReverse[index]) {
//             return true
//         }
//     return false
//     }
// }

// console.log(isPalindrome('race car'))
// console.log(isPalindrome("Madam, I'm Adam"))
// console.log(isPalindrome("hello world"))

// exo 3---------------------------------
// const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// function ceasar(str, num) {
//     let strArray = str.toLowerCase().trim().split('')
    
//     for (let index = 0; index < strArray.length; index++) {
//         let char = strArray[index];
//         let charIndex = alphabet.indexOf(char);

//         if (charIndex !== -1) {
//             let newIndex = (charIndex + num) % 26;

//             if (newIndex < 0) newIndex += 26;

//             strArray[index] = alphabet[newIndex];
//         }
//     }
    
//     return strArray.join('');
// }

// console.log(ceasar("zoo keeper", 2 ));
// console.log(ceasar("bqq mggrgt", -2));
// console.log(ceasar("My name is Henrique", 3));

// ex 4----------------------------------------------------

// function reverse(sentence) {
//     let words = sentence.split(" ");
  
//     for (let i = 0; i < words.length; i++) {
//       let word = words[i];

//         words[i] = word.split("").reverse().join("");
//     }
  
//     return words.join(" ");
//   }
  
//   console.log(reverse("This is a string of words"));

// ex 5 --------------------------------------------------------

