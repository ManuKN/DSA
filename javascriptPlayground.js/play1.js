const object1 = {
  name: 'ManuGowda',
  clg: () => {
    return console.log('nkn');
  },
  collage: function () {
    return console.log('dfgvdfv');
  },
  place: 'Bengaluru',
};

const object2 = { name: 'Manu', clg: 'Presidency University' };
console.log(Object(object1));
Object.assign(object2, object1);

console.log(object2);

function playfground(arr) {
  if (!arr.length) return 'Empty Array';
  if (arr.length === 1) return -1;

  // let largestNo = [];
  const sorted = arr.sort((a, b) => b - a);
  console.log(sorted);
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > largestNo) {
  //     largestNo.push(arr[i]);
  //   }
  // }
  return sorted[1];
}

//finding the second smallest and largest with better approach if u want to mak eit even better make diffrent function for small and large and call them.
function playground2(arr) {
  if (!arr.length) return 'Empty Array';
  if (arr.length === 1) return -1;
  let large = -Infinity;
  let secondLarge = -Infinity;
  let small = Infinity;
  let secondSmall = Infinity;
  for (let i = 0; i < arr.length; i++) {
    small = Math.min(small, arr[i]);
    large = Math.max(large, arr[i]);
  }
  for (let j = 0; j < arr.length; j++) {
    console.log(secondSmall);
    if (arr[j] < secondSmall && arr[j] != small) secondSmall = arr[j];
    if (arr[j] > secondLarge && arr[j] != large) secondLarge = arr[j];
  }
  return {secondLarge , secondSmall}
  console.log('secondSmall', secondSmall);
  console.log('secondLarge', secondLarge);
}

console.log("sdfg",playground2([114, 3, 65, 7, 89, 4, 69, 100]));

//check if the array is sorted
function checkSorted(arr) {
  if (!arr.length) return 'Empty Array';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(checkSorted([3, 7, 65, 69, 89, 100, 114]));

//Remove the duplicates
function removeDuplicates1(arr) {
  if (!arr.length) return 'Empty Array';
  let freshArray = [];
  for (let i = 1; i < arr.length; i++) {
    if (!freshArray.includes(arr[i])) {
      freshArray.push(arr[i]);
    }
  }
  return freshArray;
}

function removeDuplicates2(arr) {
  if (!arr.length) return 'Empty Array';
  return [...new Set(arr)];
}

function removeDuplicates3(arr) {
  if (!arr.length) return 'Empty Array';
  let freshArray = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < freshArray.length; j++) {
      if (freshArray[j] === arr[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      freshArray.push(arr[i]);
    }
  }
  return freshArray;
}

function removeDuplicates4(arr) {
  if (!arr.length) return 'Empty Array';
  let obj = {};
  let freshArrya = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      freshArrya.push(arr[i]);
    }
  }
  return freshArrya;
}

console.log(removeDuplicates4([3, 7, 65, 114, 69, 89, 89, 100, 100, 114, 114]));

function rotateArrayByOnePlace(arr, n) {
  if (!arr.length) return 'Empty Array';
  let temp = arr[0];
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp;
  for (let j = 0; j < n; j++) {
    console.log(arr[j] + ' ');
  }
}

rotateArrayByOnePlace([3, 7, 65, 114, 69], 5);

//Brute force approach to shift the no elemnts to the kth position
function rotateArrayByKelements1(arr, n, k, direction = 'left') {
  if (!arr.length) return 'Empty Array';
  const effectiveK = k % arr.length;
  if (direction === 'left') {
    // const LatestArray = arr.concat(arr.slice(0, k));
    // LatestArray.splice(0, k);
    // return LatestArray;
    return [...arr.slice(effectiveK), ...arr.slice(0, effectiveK)];
  } else {
    // const LatestArray = arr.slice(arr.length - k);
    // const FinalArray = LatestArray.concat(arr);
    // FinalArray.splice(FinalArray.length - k);
    // return FinalArray;
    return [...arr.slice(n - k), ...arr.slice(0, n - k)];
  }
}
console.log(rotateArrayByKelements1([3, 7, 65, 114, 69], 5, 2, 'right'));

//Optimal Aproach to solve shift the no elemnts to the kth position
function moveZerosToEnd(arr) {
  if (!arr.length) return 'Empty Arrary';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        
    }
  }
  return arr;
}

console.log("nkn",moveZerosToEnd([12, 0, 45, 23, 0, 56, 76, 0]));

function unionNumbers(arr1, arr2) {
  if (!arr1.length || !arr2.length) return 'Found one Empty Array';
  let Union = [];
  const frequency1 = {};
  for (let key of arr1) {
    frequency1[key] = (frequency1[key] || 0) + 1;
  }
  for (let key of arr2) {
    frequency1[key] = (frequency1[key] || 0) + 1;
  }
  for (let key in frequency1) {
    if (frequency1[key] === 1) {
      Union.push(key);
    }
  }
  return Union;
}

console.log(
  unionNumbers([12, 0, 45, 23, 0, 56, 76, 0], [3, 7, 76, 65, 114, 69])
);

//this will only work for sorted array
function missingNo(n, arr) {
  if (!arr.length) return 'Empty Array';
  const sorted = arr.sort((a, b) => a - b);
  let missingNO = [];
  for (let i = 0; i < n; i++) {
    if (sorted[i] && sorted[i + 1] !== sorted[i] + 1) {
      missingNO.push(sorted[i] + 1);
    }
  }
  return missingNO;
}

function missingNo2(n, arr) {
  if (!arr.length) return 'Empty Array';
  const MaxNum = Math.max(...arr);
  const fullSet = new Set(Array.from({ length: MaxNum }, (_, i) => i + 1));
  for (let num of arr) {
    fullSet.delete(num);
  }
  return Array.from(fullSet);
}

console.log(missingNo2(9, [1, 4, 2, 3, 6, 5, 7, 9]));

function maxconsecutiveOnes(arr) {
  if (!arr.length) return 'Empty Array';
  let Count = 0;
  let maxOnes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      Count++;
    } else {
      Count = 0;
    }
    maxOnes = Math.max(maxOnes, Count);
  }
  return maxOnes;
}

console.log(maxconsecutiveOnes([1, 1, 0, 1, 1, 1]));

function findNumberThatAppearOnce(arr) {
  if (!arr.length) return 'Empty Array';
  const frequency = {};
  for (let key of arr) {
    frequency[key] = (frequency[key] || 0) + 1;
  }
  for (let key in frequency) {
    if (frequency[key] === 1) {
      return Number(key);
    }
  }
}

console.log(findNumberThatAppearOnce([2, 3, 2, 4, 3, 4, 5, 6, 6, 7, 8, 7, 8]));

function sortAnArray(arr) {
  if (!arr.length) return 'Empty Array';
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
  return arr;
}
console.log("sfgdf",sortAnArray([2, 1, 0, 2, 0, 1]));

//very important for interview please practice;
function LongestSubStringWithGivienSum(arr, sum) {
  if (!arr.length) return 'Empty Array';
  let longestArray = [];
  let maxLength = 0;
  let SumCount = 0;
  let start = 0;
  for (let end = 0; end < arr.length; end++) {
    SumCount += arr[end];
    while (SumCount > sum && start <= end) {
      SumCount -= arr[start];
      start++;
    }
    if (SumCount === sum) {
      const temp = arr.slice(start, end + 1);
      if (temp.length > maxLength) {
        longestArray = temp;
        maxLength = temp.length;
      }
    }
  }
  return longestArray;
}

console.log(LongestSubStringWithGivienSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 7));

function twoSum(arr, sum) {
  if (!arr.length) return 'Empty Array';
  //let array = [];
  let sumCount = 0;
  let start = 0;
  let next = 1;
  for (let i = start; i < arr.length; i++) {
    for (let j = next; j < arr.length; i++) {
      if (arr[i] + arr[j] === sum) {
        console.log(arr[i] + arr[j]);
        return 'Yes';
      }
    }
  }
  return 'No';
}

console.log(twoSum([2, 6, 5, 7, 11], 14));

function swap(index1, index2, arr) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function sortAnArray(arr) {
  if (!arr.length) return 'Empty Array';
  let next = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[next]) {
      swap(i, next, arr);
      next++;
    }
  }
  return arr;
}

console.log(sortAnArray([2, 1, 0, 2, 0, 1]));
