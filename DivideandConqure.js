//given an arr and integer find the the integer index in the arr
//solution 1 naive solution
function findIndex(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
}
console.log(findIndex([1, 3, 5, 6, 7, 3, 8], 6));

//This is divide and Conqure solution
function findIndexRefactor(arr, n) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const currentElement = arr[middle];
    if (currentElement < n) {
      min = middle + 1;
    } else if (currentElement > n) {
      max = middle - 1; 
    } else {
      return middle;
    }
  }
}

console.log(findIndexRefactor([1, 3, 5, 6, 7, 3, 8], 6));
