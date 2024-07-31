function capitalizeWords(arr){
   let newArray = []
   function helper(arr){
    if(arr.length === 0) return;
      newArray.push(arr[0].toUpperCase())
      helper(arr.slice(1))
   }
   helper(arr)
   return newArray
}

console.log(capitalizeWords(['manu','chethan','manoj']))