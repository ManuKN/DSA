// function constructNote(message, letters) {
//   if (message.length > letters.length) return false;
//   // add whatever parameters you deem necessary - good luck!
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let key of letters.toLowerCase()) {
//     frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
//   }
//   for (let key of message.toLowerCase()) {
//     frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);

//   for (let key in frequencyCounter2) {
//     if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
//   }
//   return true;
// }

//fully optimised solution
function constructNote(message, letters) {
  if (message.length > letters.length) return false;

  const frequencyCounter = {};

  for (let char of letters.toLowerCase()) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (let char of message.toLowerCase()) {
    if (!frequencyCounter[char]) {
      return false;
    }
    frequencyCounter[char]--;
  }

  return true;
}

console.log(constructNote('aabbcc', 'bcabcaddff'));
