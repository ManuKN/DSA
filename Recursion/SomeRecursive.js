function someRecursive(arr , isOdd){
    if(arr.length === 0 ) return false
    if(isOdd(arr[0])) return true
    else if(arr.length > 0){
       return someRecursive(arr.slice(1, arr.length), isOdd);
    }
}

const isOdd = (val) => {
  return val%2 !== 0;
}

console.log(someRecursive([4 ,6, 8 , 9] , isOdd));