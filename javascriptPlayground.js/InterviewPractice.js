//String is anagram or not
function Anagram(str1, str2) {
  const frequency1 = {};
  const frequency2 = {};

  for (let key of str1) {
    frequency1[key] = (frequency1[key] || 0) + 1;
  }

  for (let key of str2) {
    frequency2[key] = (frequency2[key] || 0) + 1;
  }

  for (let key1 in frequency1) {
    if (frequency1[key1] != frequency2[key1]) {
      return false;
    }
  }
  return true;
}

console.log(Anagram("listen", "silent"));

function palindrom(str) {
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    if (str[start] != str[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
}
console.log(palindrom("malayalam"));

function secondhigh(arr) {
  const newArray = arr.sort((a, b) => a - b);
  return newArray[1];
}

console.log(secondhigh([21, 34, 65, 87, 32, 43]));

function flattenArray(arr) {
  let newArray = [];
  function helper(arr1) {
    for (let key of arr1) {
      if (Array.isArray(key)) {
        helper(key);
      } else {
        newArray.push(key);
      }
    }
  }
  helper(arr);
  return newArray;
}
console.log(flattenArray([3, 12, 34, 54, [3, 5], [765, 4]]));

function removeDuplicates(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

console.log(removeDuplicates([223, 1, 56, 43, 4, 98, 223]));

function reverseString(str) {
  let newArray = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newArray += str[i];
  }
  return newArray;
}

console.log(reverseString("nknbenki"));

function missingNumbers(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      newArray.push(arr[i] + 1);
    }
  }
  return newArray;
}

console.log(missingNumbers([1, 3, 5, 9]));

function mergetwoArray(arr1, arr2) {
  return [...arr1, ...arr2].sort((x, y) => x - y);
}

console.log(mergetwoArray([2, 4, 6, 1, 65, 34, 12], [1, 3, 23, 13, 25]));

function moveAllZerosToEnd(arr) {
  let newArray = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArray.push(arr[i]);
    } else {
      count++;
    }
  }
  const zeros = Array.from({ length: count }, () => 0);
  return newArray.concat(zeros);
}

console.log(moveAllZerosToEnd([1, 5, 0, 3, 34, 0, 0, 12, 34, 0, 12]));

function secondLargestandSmallest(arr) {
  if (arr.length < 2) {
    return { secMax: null, secondSmall: null };
  }

  let max = -Infinity;
  let secMax = -Infinity;
  let min = Infinity;
  let secondSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // Update max and second max
    if (val > max) {
      secMax = max;
      max = val;
    } else if (val > secMax && val !== max) {
      secMax = val;
    }

    // Update min and second min
    if (val < min) {
      secondSmall = min;
      min = val;
    } else if (val < secondSmall && val !== min) {
      secondSmall = val;
    }
  }

  // Handle case where there's no distinct second largest or second smallest
  secMax = (secMax === -Infinity) ? null : secMax;
  secondSmall = (secondSmall === Infinity) ? null : secondSmall;

  return { secMax, secondSmall };
}


//Product of Array expect Self
function productofArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result.push(product);
  }
  return result;
}

console.log(productofArray([1, 2, 3, 4]));