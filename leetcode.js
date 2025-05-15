let str = '11111011100111';
//we should need to keep track of how many swap should happenig to keep all the zeros at the left and all the 1s at the right
function Leetcode() {
  let left = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '0') {
      count += i - left;
      left++;
    }
  }
  return count;
}

console.log(Leetcode());

