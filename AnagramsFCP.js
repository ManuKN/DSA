//given two string check is the second string is anagarm of first
function anagarm(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
}
console.log(anagarm("hello", "olleh"));

function pallindrom(str) {
  const newStr = str.toLowerCase().replace(/\s/g, "");
  console.log("str", newStr);
  let first = 0;
  let last = newStr.length - 1;
  const mid = newStr.length - 1 / 2;
  while (first <= newStr.length - 1 / mid && last >= newStr.length / mid) {
    if (newStr[first] === newStr[last]) {
      first++;
      last--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(pallindrom("m a l a y a l a m"));

function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("nknBenki"));

function HammingDistance(x, y) {
  console.log((x ^ y).toString(2).split("1").length - 1);
}

console.log(HammingDistance(1, 4));
