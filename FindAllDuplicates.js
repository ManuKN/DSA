function findAllDuplicates(arr) {
  // add whatever parameters you deem necessary - good luck!
  const frequencyCounter = {};
  const result = [];
  for (let key of arr) {
    frequencyCounter[key] = (frequencyCounter[key] || 0) + 1;
  }
  for(let key in frequencyCounter){
      if(frequencyCounter[key] > 1){
        result.push(Number(key))
      }
  }
  return result
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1 , 2]));
