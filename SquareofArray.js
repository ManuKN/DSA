function same(arr1 , arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++)
    {
        //here we r square of each element of arr1 and based on that we r finding the index of it in arr2
        const currentindex = arr2.indexOf(arr1[i] ** 2)
        if(currentindex === -1)
        {
            return false
        }
        console.log(arr2)
        arr2.splice(currentindex , 1)
    }
    return true
}

console.log(same([1 , 2 , 3 , 4] , [4 , 9 , 16 , 1])) 

// Time complexity of this is O(n2)