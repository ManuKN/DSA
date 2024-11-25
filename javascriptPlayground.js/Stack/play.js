function GreaterElementsUsingStack(arr) {
  if (!arr.length) return 'Empty array';
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let greaterElementAfter = -1;
    let greaterElementBefore = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        greaterElementAfter = Math.max(greaterElementAfter, arr[j]);
        break;
      }
    }
    if (i > 0) {
      for (let k = 0; k < i; k++) {
        if (arr[k] > arr[i]) {
          greaterElementBefore = Math.max(greaterElementBefore, arr[k]);
          break;
        }
      }
    }
    stack.push(
      greaterElementAfter !== -1 ? greaterElementAfter : greaterElementBefore
    );
  }
  return stack;
}

console.log(
  GreaterElementsUsingStack([1, 8, -1, -100, -1, 222, 1111111, -111111])
);

function PreviousSmallerElement(arr) {
  if (!arr.length) return 'Empty array';
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let smallestElement = -1;
    if (i > 0) {
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] < arr[i]) {
          smallestElement = arr[j];
          break;
        }
      }
    }
    stack.push(smallestElement);
  }
  return stack;
}

console.log(PreviousSmallerElement([4, 5, 2, 10, 8]));

function NumberOfNGEsToTheRight(arr, indices) {
  if (!arr.length) return 'Empty array';
  if (!indices.length) return 'Empty indices';
  let stack = [];
  for (let i = 0; i < indices.length; i++) {
    let count = 0;
    for (let j = indices[i]; j < arr.length; j++) {
      if (arr[j] > arr[indices[i]]) {
        count++;
        console.log(count);
      }
    }
    stack.push(count);
  }
  return stack.toString();
}

// Time complexity - O(Q * N);
// Space Complexity - O(Q)

console.log(NumberOfNGEsToTheRight([1, 2, 3, 4, 1], [0, 3]));

function rainWaterTrapper(arr) {
  /// Remember this needs to be optimised should work on this the space complexity is more O(2N) we need to reduce it
  if (!arr.length) return 'Empty Array';
  let total = 0;
  const Prefix = prefix(arr);
  const Suffix = suffix(arr);
  for (let i = 0; i < arr.length; i++) {
    let leftMax = Prefix[i];
    let rightMax = Suffix[i];
    if (arr[i] < leftMax && arr[i] < rightMax) {
      total += Math.min(leftMax, rightMax) - arr[i];
    }
  }
  return total;
}

function prefix(arr) {
  if (!arr.length) return 'Empty prefix array';
  let prefix = [];
  prefix[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = Math.max(prefix[i - 1], arr[i]);
  }
  return prefix;
}

function suffix(arr) {
  if (!arr.length) return 'Empty suffix array';
  const n = arr.length;
  let suffix = [];
  suffix[n - 1] = arr[n - 1];
  for (let i = n - 2; i > 0; i--) {
    suffix[i] = Math.max(suffix[i + 1], arr[i]);
  }
  return suffix;
}

console.log(rainWaterTrapper([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1, 4]));

//we an write the code like for loop inside a for loop to find the subarray and min value of each but that not a good way lets optimise it now
//best case
function SumofSubArrayMin(arr) {
  let NGE = GreaterElementsUsingStack(arr);
  let PSE = PreviousSmallerElement(arr);
  let total = 0;
  let mod = 1e9 + 7;
  for (let i = 0; i < arr.length; i++) {
    left = i - PSE[i];
    right = NGE[i] - i;
    total += (total + ((right * left * arr[i]) % mod)) % mod;
  }
  return total;
}

console.log(SumofSubArrayMin([3, 1, 2, 4]));

//worst case using for loop inside a for loop

function SumofSubArrayMin2(arr) {
  if (!arr.length) return 'Empty Array';
  let total = 0;
  let sunArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let subArr = arr.slice(i, j + 1);
      total += Math.min(...subArr);
      sunArray.push(arr.slice(i, j + 1));
    }
  }
  return { total, sunArray };
}

console.log(SumofSubArrayMin2([1, 2, 4]));
