//this is main mergesort funtion  using recursion ⭐⭐⭐⭐⭐
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return arrayCombainer(left, right);
}

console.log(mergeSort([7, 3, 4, 6, 8, 89, 4, 3]));

//function to combain the two array in a sorted order⭐⭐⭐
function arrayCombainer(arr1, arr2) {
  if (arr1.length === 0 && arr2.lenght === 0) return 'empty array';
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    result = result.concat(arr1.slice(i));
  }
  if (j < arr2.length) {
    result = result.concat(arr2.slice(j));
  }
  return result;
}

function helper(arr1, arr2) {
  let result = arr1.concat(arr2);
  return result;
}

console.log(arrayCombainer([1, 8, 3, 9], [89, 61, 69, 55, 99, 91]));
