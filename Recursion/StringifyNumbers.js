function stringifyNumbers(obj){
   const newObj = JSON.parse(JSON.stringify(obj));
   for(let key in newObj){
    if(typeof obj[key] === 'object' && obj[key] !== null){
        stringifyNumbers(obj[key])
    }
    else{
        if(typeof obj[key] === 'number'){
         key = String(obj[key])
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


