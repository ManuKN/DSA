function countUniquevalues(arr){
 if(arr.length === 0) return 0
 let i = 0
 for(let j = 1; j<arr.length;j++){
   if(arr[i] !== arr[j])
   {
    i++
    arr[i] = arr[j]
   }
   console.log(i , j)
 }
 return i+1
}

//this solution only works for sorted array
console.log(countUniquevalues([1, 1, 2, 2, 3, 4, 5, 5, 6]))