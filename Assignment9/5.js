function filterOddNumbers(arr) {
  return arr.filter(number => number % 2 !== 0);
}

const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = filterOddNumbers(allNumbers);
console.log("--- Filter() for Odd Numbers ---");
console.log(`Original numbers: ${allNumbers}`);
console.log(`Odd numbers: ${oddNumbers}`);
console.log("\n");
