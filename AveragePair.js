//Section 6 exercise5
//using Multiple pointer
function averagePair(arr , avg){
   let start = 0;
   let end = arr.length - 1;
   while(start < end){
    console.log(start , end)
     let average = (arr[start] + arr[end]) / 2;
     if(average === avg){
        return true
     }
     else if(average < avg){
        start++
     }
     else{
        end--
     }
   }
   return false
}

//Time complexity O(n) and space complexity O(1)
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
