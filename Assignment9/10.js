function sumArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const numbersToSum = [1, 2, 3, 7, 5];
const sum = sumArray(numbersToSum);
console.log("--- Reduce() to Calculate Sum ---");
console.log(`The sum of the numbers is: ${sum}`);