function stringifyNumbers(obj){
   const newObj = JSON.parse(JSON.stringify(obj));
   for(let key in newObj){
    if(typeof newObj[key] === 'object' && newObj[key] !== null){
        newObj[key] = stringifyNumbers(newObj[key])
    }
    else{
        if(typeof newObj[key] === 'number'){
        newObj[key] = String(newObj[key])
        }
    }
}
return newObj
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));   


