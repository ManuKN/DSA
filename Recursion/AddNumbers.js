function sumofArray(index, arr) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + sumofArray(index + 1, arr);
}

console.log(sumofArray(0 , [1 ,2 ,3 ,4 ,5]))
