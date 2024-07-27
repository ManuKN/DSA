function powerofarray(arr){
    let total = 1;
    function helper(arr){
        if(arr.length === 0) return total
       total*=arr[0]
      helper(arr.slice(1))
    }
   helper(arr)
   return total
}

console.log(powerofarray([1 ,2 ,3 ,4 ,5 , 6 , 7]))