function squareNumbers(arr) {
  return arr.map(number => number * number);
}

const numbersToSquare = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbersToSquare);
console.log("--- Map() to Square Numbers ---");
console.log(`Original numbers: ${numbersToSquare}`);
console.log(`Squared numbers: ${squaredNumbers}`);
console.log("\n");