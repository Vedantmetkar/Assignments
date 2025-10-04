const str = "This is a sample string with vowels and consonants";
const vowels = str.match(/[aeiou]/gi) || [];
const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
console.log("Vowels:", vowels.length);
console.log("Consonants:", consonants.length);