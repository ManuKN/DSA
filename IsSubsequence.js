//section6 excercise 6
//Multiple Pointer
function isSubsequence(arr1 , arr2){
const data1 = arr1.split('');
const data2 = arr2.split('');
let start1 = 0;
let start2 = 0;
  while(start2 <= data2.length)
  {
      if(data1[start1] === data2[start2]){
           start1++
           if(start1 === data1.length){
            return true
           }
      }
    start2++  
  }
  return false
}

console.log(isSubsequence('abc', 'abracadabra'));