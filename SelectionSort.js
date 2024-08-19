function selectionSort(arr){
  if(arr.length === 0 ) return 'empty array';
  for(let i = 0; i<arr.length - 1; i++){
    let small = i
    for(let j = i+1; j<arr.length; j++){
        if(arr[j] < arr[small]){
          small = j
        }
      }
      if(small !== i)
      {
       [arr[i], arr[small]] = [arr[small], arr[i]]
      }
  }
  return arr
}

console.log(selectionSort([76 , 45 , 8  , 6 , 234 , 2  , 5 ,23]))