//section6 practice questions
//this is using frequency counter apparoch
function areThereDuplicates(...arr){
 let frequencyCOunter = {}
 for(let val of arr){
    frequencyCOunter[val] = (frequencyCOunter[val] || 0) + 1
 } 
 for(let key in frequencyCOunter){
    if(frequencyCOunter[key] > 1){
        return true
    }
 }
 return false
}

//Should be sorted if interger
console.log(areThereDuplicates(1 , 2 , 1 , 3));


//Multiple pattern
function areThereDuplicates2(...arr){
    let i = 0;
    for(let j=i+1; j<arr.length; j++){
        console.log(i , j)
        if(arr[i] !== arr[j]){
            i++
        }
        else if(arr[i] === arr[j]){
            return true
        }
    }
    return false
}
//time complexity O(n) and space complexity O(1)
console.log(areThereDuplicates2(1,2,2,3));