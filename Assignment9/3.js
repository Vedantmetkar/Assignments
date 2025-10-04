function modifyArray(arr, newElement)
 {
    arr.pop();
  arr.push(newElement);
  
  return arr;
}

const originalArray = [1, 2, 3];
const modifiedArray = modifyArray([...originalArray], 4); // Use a copy to avoid mutating the original
console.log("--- Array Push and Pop ---");
console.log(`Original array: ${originalArray}`);
console.log(`Modified array (after push and pop): ${modifiedArray}`);
console.log("\n");
