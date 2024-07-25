//section 6 exercise 8
//sliding window pattern
//steps to follow
//1.check an array weather that interger we passed is there r not and than check if there is any single number which is greater when our interger
//2. check by  adding 2 elemnts by keeping sliding window as 2 if we did not found the number which is greate than the interger that we given then increase sliding whindow length to 3 and soo on untill we get as a minnum pair
function minSubArrayLen(arr , num) {

  for(let val of arr)
  {
    if(val >= num){
        return 1
    }
  }
  
  for(let windowSize = 2; windowSize <= arr.length ; windowSize++){
    let temp = 0;
    for(let i = 0; i< windowSize; i++){
       temp+= arr[i]       
    }

    if(temp >= num){
        return arr.slice(0 , windowSize)
    }

    for(let j = windowSize ; j < arr.length; j++){
        temp = temp - arr[j - windowSize] + arr[j]
        if(temp >=num)
        {
            return arr.slice(j -windowSize + 1 , j+1).length
        }
    }
  }
  return null
}

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
