//given 2 array check if the second array is square of each element in first array
//This is using frequencyCounter pattern 

function same(arr1 ,arr2){
    if(arr1.length !== arr2.length)
    {
        return false
    }
    const frequencyCounter1 = {}
    const frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2))
        {
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key ** 2])
        {
            return false
        }
    }
    return true
}

console.log(same([1 ,2 , 3 , 4], [4 , 1 , 16 , 9]))


//Normal solution without using frequencyCOunter
// function same(arr1 , arr2){
//     if(arr1.length !== arr2.length)
//     {
//         return false
//     }
//     for(let i = 0; i<arr1.length; i++){
//         const indexCounter = arr2.indexOf(arr1[i] ** 2)
//         if(indexCounter === -1){
//             return false
//         }
//     }
//     return true
// }

// console.log(same([1 , 2 , 3 , 4], [4 , 9 , 16 , 1]))
