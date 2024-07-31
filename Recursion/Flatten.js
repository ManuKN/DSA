function flatten(arr){
    if(arr.length === 0) return "empty array"
    let flattenedArray = []
   arr.forEach(element => {
      if(Array.isArray(element)){
        flattenedArray = flattenedArray.concat(flatten(element))
      }
      else{
        flattenedArray.push(element);
      }
   });
   return flattenedArray
}

console.log(flatten([1 ,2  , [7 , 9] , 4 , [[5,6]]]))

