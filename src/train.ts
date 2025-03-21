function areArraysEqual(arr1: number[], arr2: number[]): boolean {
  const countElements = (arr: number[]) => {
    return arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
  };

  const count1 = countElements(arr1);
  const count2 = countElements(arr2);

  if (Object.keys(count1).length !== Object.keys(count2).length) {
    return false;
  }

  for (const key in count1) {
    if (count1[key] !== count2[key]) {
      return false;
    }
  }

  return true;
}
console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));
console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));
// function areParenthesesBalanced(str: string): boolean {
//   let balance = 0;

//   for (const char of str) {
//     if (char === "(") {
//       balance++;
//     } else if (char === ")") {
//       balance--;
//     }

//     if (balance < 0) {
//       return false;
//     }
//   }

//   return balance === 0;
// }
// console.log(areParenthesesBalanced("(test)()"));
// console.log(areParenthesesBalanced("(test("));
// function rotateArray(arr: number[], index: number): number[] {
//   if (index < 0 || index >= arr.length) {
//     throw new Error("Index out of bounds");
//   }

//   return [...arr.slice(index), ...arr.slice(0, index)];
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
// function reverseInteger(num: number): number {
//   return parseInt(num.toString().split("").reverse().join(""), 10);
// }
// console.log(reverseInteger(25478924655));

// /TASK_ZK/;
// function printNumbers(number: number, delay: number): void {
//   for (let i = 1; i <= number; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * delay);
//   }
// }
// printNumbers(5, 1000);
// /!TASK_ZI!/;

// function delaythenLog(message: string, delay: number): void {
//   setTimeout(() => {
//     console.log(message);
//   }, delay);
// }
// delaythenLog("this is delayed message ", 3000);

// /!TASK_ZH!/;
// function findDissapearedNumbers(nums: number[]): number[] {
//   const result: number[] = [];
//   const set = new Set<number>(nums);
//   for (let i = 1; i <= nums.length; i++) {
//     if (!set.has(i)) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(findDissapearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// /!TASK_ZG!/;

// function convertToSnakeCase(str: string): string {
//   return (
//     str
//       ?.trim()
//       .toLowerCase()
//       .replace(/[^a-zA-Z0-9\s]/g, "")
//       .split(/\s+/)
//       .join("_") || ""
//   );
// }
// console.log(convertToSnakeCase("name should be a string"));
// /!TASK_ZF!/;
// function capitalizeWords(str: string): string {
//   return str
//     .split(" ")
//     .map((word) => {
//       if (word.length > 2) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       } else {
//         return word;
//       }
//     })
//     .join(" ");
// }
// const result = capitalizeWords("name should be a string");
// console.log(result);

// /!TASK_ZE!/;
// function removeDuplicate(str: string): string {
//   if (typeof str !== "string") {
//     throw new Error("Argument must be a string");
//   }

//   const uniqueChars = new Set<string>();
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (!uniqueChars.has(char)) {
//       uniqueChars.add(char);
//       result += char;
//     }
//   }

//   return result;
// }

// console.log(removeDuplicate("ttayyoqq"));

// /!TASK ZD!/;
// function changeNumberInArray(
//   firstNumber: number,
//   arr: number[],
//   thirdNumber: number
// ): number[] {
//   if (firstNumber < 0 || firstNumber >= arr.length) {
//     throw new Error("Index array chegarasidan tashqarida.");
//   }

//   const updatedArray = [...arr];
//   updatedArray[firstNumber] = thirdNumber;

//   return updatedArray;
// }
// const result = changeNumberInArray(1, [1, 3, 7, 4], 2);
// console.log(result);
// /!Task_Z/;

// interface Person {
//   age: number;
// }

// function sortByAge(arr: Person[]): Person[] {
//   return arr.sort((a, b) => a.age - b.age);
// }

// const people: Person[] = [{ age: 23 }, { age: 21 }, { age: 13 }];
// console.log(sortByAge(people));
// Natija: [{ age: 13 }, { age: 21 }, { age: 23 }]

// /!Task_T/;
// function sumEvens(numbers: number[]): number {
//   return numbers
//     .filter((num) => num % 2 === 0)
//     .reduce((sum, num) => sum + num, 0);
// }
// console.log(sumEvens([4, 4]));
// console.log(sumEvens([1, 2, 3, 2]));
/* Task_Y */
// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   return arr1.filter((value) => arr2.includes(value));
// }
// const result = findIntersection([1, 2, 3], [3, 2, 0]);
// console.log(result);
// function countOccurrences(obj: any, key: string): number {
//   let count = 0;

//   function recursiveCount(currentObj: any) {
//     if (typeof currentObj === "object" && currentObj !== null) {
//       for (const k in currentObj) {
//         if (k === key) count++;
//         recursiveCount(currentObj[k]);
//       }
//     }
//   }

//   recursiveCount(obj);
//   return count;
// }

// const data = {
//   model: "Bugatti",
//   size: 300,
//   steer: {
//     size: 300,
//   },
// };

// console.log(countOccurrences(data, "size"));

// function chunkArray<T>(array: T[], size: number): T[][] {

//   const result: T[][] = [];
//   let i = 0;

//   while (i < array.length) {
//     result.push(array.slice(i, i + size));
//     i += size;
//   }

//   return result;
// }
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunked = chunkArray(array, 3);
// console.log(chunked);
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
