function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).filter(Boolean).length;
}

const para = "This is a sample paragraph with several words.";
console.log(countWords(para)); 
