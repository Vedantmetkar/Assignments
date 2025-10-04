const states = ["Andhra Pradesh", "Bihar", "Kerala", "Uttar Pradesh", "Odisha", "Tamil Nadu", "Assam"];
console.log(states);
const filteredStates = states.filter(state => !/^[AEIOU]/i.test(state));
console.log(filteredStates);

