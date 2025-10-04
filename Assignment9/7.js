function calculateArea(dimensions) {
  return dimensions.width * dimensions.height;
}

const rectangle = {
  width: 10,
  height: 20
};
const area = calculateArea(rectangle);
console.log("--- Calculate Rectangle Area ---");
console.log(`The area of the rectangle is: ${area}`);
console.log("\n");