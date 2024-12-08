//Task-H

function getPositive(arr: number[]): number[] {
  let result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(getPositive([1, -4, 2]));

//!https://stackoverflow.com/questions/71670965/how-do-i-assert-a-number-type-is-positive
