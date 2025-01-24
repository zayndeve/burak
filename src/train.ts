function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = [];
  let i = 0;

  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i += size;
  }

  return result;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunked = chunkArray(array, 3);
console.log(chunked);
//TASK_V
// function countChars(input: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};

//   for (const char of input) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }

//   return result;
// }
// const input = "Ziynatilloh";
// const output = countChars(input);
// console.log(output);

// function sumOdds(number: number): number {
//   let count = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(sumOdds(9));

/* Task_t */
// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

//?https://www.geeksforgeeks.org/merge-two-sorted-arrays/
//TASK-S

// function missingNumber(nums: number[]): number {
//   const numSet = new Set(nums);
//   for (let i = 0; i <= nums.length; i++) {
//     if (!numSet.has(i)) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(missingNumber([0, 1, 2, 3, 5, 6, 7, 8, 9]));
// console.log(missingNumber([0, 1]));

//! BU safar vazifalar ko`pligi va yalqovligimdan gptdan ma`lum darajada foydalandim uzur!
//TASK_R
// function calculate(input: string): number {
//   const parts = input.split(" ");
//   const num1 = Number(parts[0]),
//     num2 = Number(parts[2]);
//   let result: number;
//   switch (parts[1]) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     default:
//       throw new Error("Noto'g'ri operator!");
//   }
//   return result;
// }
// console.log(calculate("1 + 3"));
// console.log(calculate("3 - 4"));
// console.log(calculate("5 * 7"));
//TASK_Q:

// function hasProperty(obj: { [key: string]: any }, key: string): boolean {
//   return key in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "Yofproduction"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "name"));

//!?https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
// function objectToArray(inputObject: { [key: string]: any }): [string, any][] {
//   const result: [string, any][] = [];
//   for (const key in inputObject) {
//     if (inputObject.hasOwnProperty(key)) {
//       result.push([key, inputObject[key]]);
//     }
//   }
//   return result;
// }

// console.log(objectToArray({ a: 10, b: 20 }));
//TASK_O

// function calculateSumofArrays(inputArray: any[]): number {
//   let sum = 0;
//   for (let i = 0; i < inputArray.length; i++) {
//     const element = inputArray[i];
//     if (typeof element === "number") {
//       sum += element;
//     }
//   }
//   return sum;
// }
// console.log(calculateSumofArrays([45, "10", { son: 10 }, true, 35]));
// //!Ayni shu sabab typeof element === "number" bizga fazqat yig`indi qabul qilmoqda

// // !TASK_N
// function getPalindromeCheck(inputString: string): string {
//   let reverseString = "";
//   const stringLength = inputString.length;

//   for (let i = stringLength - 1; i >= 0; --i) {
//     reverseString += inputString.charAt(i);
//   }

//   if (reverseString === inputString) {
//     return `This word "${reverseString}" is palindrome`;
//   } else {
//     return "The string is not a palindrome.";
//   }
// }
// console.log(getPalindromeCheck("qovoq"));
// Task_M:
// function getSquareNumbers(
//   nums: number[]
// ): { number: number; square: number }[] {
//   return nums.map((num) => ({
//     number: num,
//     square: Math.pow(num, 2),
//   }));
// }
// console.log(getSquareNumbers([1, 2, 3]));
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
