function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

const object1 = {
  name: "vedant",
  age: 21
};
const object2 = {
  occupation: "Software developer",
  city: "india"
};
const mergedObject = mergeObjects(object1, object2);
console.log("--- Object.assign() ---");
console.log("Merged object:", mergedObject);
console.log("\n");