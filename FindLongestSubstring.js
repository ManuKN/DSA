//section 6 Excercise 9 finding longestsubstring
function findLongestSubstring(str){
  let start = 0;
  let next = 0;
  let maxlength = 0;
  let set = new Set();
  while(next < str.length){
     if(!set.has(str[next])){
        set.add(str[next])
        next++
        maxlength = Math.max(maxlength , set.size)
     } else{
        set.delete(str[start])
        start++
     } 
  }
  console.log(set)
  return maxlength;
}

console.log(findLongestSubstring('thisishowwedoit'));

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     console.log(start)
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

// console.log(findLongestSubstring('longestsubstring'));