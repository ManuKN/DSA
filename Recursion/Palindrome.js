//section-9 ex-2
function isPalindrome(str) {
  const strArray = str.split('');
  function helper(strArray) {
    if (strArray.length === 0) return '';
    return (
      strArray[strArray.length - 1] +
      helper(strArray.slice(0, strArray.length - 1))
    );
  }

  let newstr = helper(strArray);
  if (str === newstr) return true;
  else return false;
}

console.log(isPalindrome('malayalam'));

//sipleast soution
// function isPalindrome(str) {
//   if (str.length === 1) return true;
//   if (str.length === 2) return str[0] === str[1];
//   if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
//   return false;
// }