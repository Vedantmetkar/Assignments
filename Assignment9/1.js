function demonstrateVariableScope() {
  
  var varVariable = "I am a var, function-scoped.";
  if (true) {
    var varVariable = "I am a new var, still function-scoped.";
  }
  console.log(`varVariable: ${varVariable}`); 

  
  let letVariable = "I am a let, block-scoped.";
  if (true) {
    let letVariable = "I am a new let, only accessible in this block.";
    console.log(`letVariable inside block: ${letVariable}`); 
  }
  console.log(`letVariable outside block: ${letVariable}`); 

  
  const constVariable = "I am a const, block-scoped and constant.";
  try {
    
  } catch (e) {
    console.log(`constVariable: ${constVariable}`);
    console.log("Attempting to reassign a const variable will throw an error.");
  }
}



console.log("--- Variable Scope ---");
demonstrateVariableScope();
console.log("\n");