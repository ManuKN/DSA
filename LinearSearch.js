function LinearSearch(arr , num){
   for(let i = 0; i<arr.length; i++){
      if(arr[i] === num){
        return i
      }
   }
   return -1
}

console.log(LinearSearch([2 , 4 ,8 , 24 , 568, 69 ,5 ] , 69))