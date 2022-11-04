"use strict"

function palindrom(str) {
   str = str.toLowerCase();
   return str == str.split('').reverse().join("");
}

console.log(palindrom('palindrom'))
console.log(palindrom('Abba'))

// второй вариант
//  function palindrome(str) {
//  let str2 = str.split('');
//     str2 = str2.reverse();
//     str2 = str2.join("");
//     if (str == str2) return true;
//     else return false;
//    return str2;
// }
// console.log(palindrom("palindrom"));
// console.log(palindrom("Abba"));
