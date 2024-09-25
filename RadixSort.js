function RadixSort(arr) {
  if (!arr.length) return 'empty array';
  let concatedArray = arr;

  for (let i = 0; i <= mostDigits(arr); i++) {
    sortedArray = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < concatedArray.length; j++) {
      sortedArray[getDigit(concatedArray[j], i)].push(concatedArray[j]);
    }
    concatedArray = [].concat(...sortedArray);
  }
  return concatedArray;
}

console.log(RadixSort([9876, 657, 456, 45, 2, 1]));

//Helper function1
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//Helper function2
function digitCount(num) {
  return num.toString().length;
}

//Helper function3
function mostDigits(arr) {
  let max = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (digitCount(arr[i]) > max) {
      max = digitCount(arr[i]);
    }
  }
  return max;
}
