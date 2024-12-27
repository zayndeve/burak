// Task_M:
function getSquareNumbers(
  nums: number[]
): { number: number; square: number }[] {
  return nums.map((num) => ({
    number: num,
    square: Math.pow(num, 2),
  }));
}
console.log(getSquareNumbers([1, 2, 3]));
// Task_L:
// function reverseString(str: string): string {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("A lazy life is a slow death"));
//Task_H2

// function getDigits(input: string): string {
//   let matches = input.match(/\d+/g);
//   return matches ? matches.join("") : "";
// }

// console.log(getDigits("mahkam123456topshiriqlar789kelgusi2024"));

//Task-H

// function getPositive(arr: number[]): number[] {
//   let result: number[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(getPositive([1, -4, 2]));

// //!https://stackoverflow.com/questions/71670965/how-do-i-assert-a-number-type-is-positive
// TASK I:
// function majorityElement(nums: number[]): number {
//   let counts: { [key: number]: number } = {};
//   for (let num of nums) {
//     counts[num] = (counts[num] || 0) + 1;
//   }

//   let max = 0;
//   let result = -1;

//   for (let num in counts) {
//     if (counts[num] > max) {
//       max = counts[num];
//       result = +num;
//     }
//   }

//   return result;
// }

// console.log(majorityElement([1, 2, 3, 3, 2, 4, 3, 3]));
// //!https://www.geeksforgeeks.org/javascript-program-to-find-the-most-frequent-element-in-an-array/
//TASK J:
// function findLongestWord(str: string): string {
//   let longestword: string = "";
//   let strSplit = str.split(" ");
//   for (let i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestword.length) {
//       longestword = strSplit[i];
//     }
//   }
//   return longestword;
// }

// console.log(findLongestWord("Hech kimga bermaymiz seni O`zbekiston"));

// //!https://www.freecodecamp.org/news/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c/
// function getVowels(input: string): number {
//   let count = 0;
//   let str = input.toLowerCase().split("");
//   let vowels = ["a", "e", "i", "o", "u"];

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getVowels("salom"));

// //!https://stackoverflow.com/questions/71300136/how-to-return-number-of-vowels-in-a-string-in-javascript
/* Project Standards:
   - Logging standards
   - Naming standards:
       function, method, variable => CAMEL
       class                     => PASCAL
       folder, file              => KEBAB
       css                       => SNAKE
   - Error handling
*/

/* Request type:
   Traditional Api
   Rest Api
   GraphQL Api
   ...
*/

/* Frontend developmen:
   Traditional FD  =>  SSR  =>  EJS
   Modern FD       =>  SPA  =>  REACT
*/

/* Cookies:
   request join
   self destroy
*/

/* Validation:
   Frontend validation
   Backend validation
   Database validation
*/
