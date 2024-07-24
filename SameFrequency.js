//Section 6 practice questions
function sameFrequency(num1 , num2){
  let digitNum1 = num1.toString().split('').map(Number)
  let digitNum2 = num2.toString().split('').map(Number)
  if(digitNum1.length !== digitNum2.length) return false
let frequencyCounter1 ={}
let frequencyCounter2 = {}
 for(let val of digitNum1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0 ) + 1
 }
 for (let val of digitNum2) {
   frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
 }
 console.log(frequencyCounter1)
 console.log(frequencyCounter2)
for(let key in frequencyCounter1){
    if(!(key in frequencyCounter2)){
        return false
    }
    if(frequencyCounter1[key] !== frequencyCounter2[key])
    {
        return false
    }
}
 return true
}

//time complexity of this is O(n) 
console.log(sameFrequency(1234,4321))