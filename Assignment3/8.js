function repeatedSum(num) {
  while (num > 9) {
    num = num.toString().split('').reduce((acc, d) => acc + +d, 0);
  }
  return num;
}

console.log(repeatedSum(879)); 