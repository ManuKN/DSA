const object1 = {
  name: 'Manu',
  clg: 'Presidency',
  place: 'Bengaluru',
};

const object2 = {};

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
  console.log('secondSmall', secondSmall);
  console.log('secondLarge', secondLarge);
}

console.log(playground2([114, 3, 65, 7, 89, 69, 100]));

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
      arr.push(...arr.splice(i, 1));
    }
  }
  return arr;
}

console.log(moveZerosToEnd([12, 0, 45, 23, 0, 56, 76, 0]));

function unionNumbers(arr1, arr2) {
  if (!arr1.length || !arr2.length) return 'Found one Empty Array';
  let Union = []
  const frequency1 = {}; 
  for (let key of arr1) {
    frequency1[key] = (frequency1[key] || 0) + 1;
  }
  for (let key of arr2) {
    frequency1[key] = (frequency1[key] || 0) + 1;
  }
  for(let key in frequency1){
    if(frequency1[key] === 1){
      Union.push(key)
    }
  }
  return Union;
}

console.log(unionNumbers([12, 0, 45, 23, 0, 56, 76, 0], [3, 7, 76,  65, 114, 69]));