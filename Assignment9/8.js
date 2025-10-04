function getObjectKeys(obj) {
  return Object.keys(obj);
}

const myObject = {
  a: 1,
  b: "hello",
  c: true
};
const keys = getObjectKeys(myObject);
console.log("--- Object.keys() ---");
console.log(`The keys of the object are: [${keys.join(', ')}]`);
console.log("\n");
