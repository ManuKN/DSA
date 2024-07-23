//give an array and an n interger using the n we need to give the maxinum sum of summing n integer in an array
//ex ([1,2,5,2,8,1,5],4) max sum=17

//this solution is a normal naive solution
function maxSubarraySum(arr , num){
    if(num > arr.length) return null
   let max = -Infinity;
   for(let i=0; i< arr.length - num + 1; i++){
    let temp = 0;
    for(let j = 0; j < num; j++){
        console.log(i , j)
      temp+=arr[i + j]
    }
     if (temp > max) {
       max = temp;
     }
   }
   return max
};

console.log(maxSubarraySum([1,5,6,6,7,2,3,5,1],3));

//This is sliding window solution with timecomplexity O(n)
function maxSubarraySumRefactor(arr , num){
    let max = 0;
    let temp = 0;
    for(let i = 0; i < num ; i++){
        temp+=arr[i]
    }
    max = temp;
    for(let i = num ; i < arr.length ; i++){
        temp = temp - arr[i - num] + arr[i] 
        max = Math.max(temp,max)
    }
    return max
}

console.log(maxSubarraySumRefactor([1, 5, 6, 6, 7, 2, 3, 5, 1], 3));