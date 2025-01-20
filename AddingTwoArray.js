function AddingtwoArray(arr1 , arr2){
  if(!arr1.length || !arr2.length) return undefined;
  let x = arr1.length-1;
  let y = arr2.length-1;
  let sum = 0;
  while(x >= 0 && y >= 0){
    sum += arr1[x] + arr2[y];
    x--;
    y--;
 }
 return sum;
}

console.log(AddingtwoArray([67 , 245 ,456] , [4 , 78, 32]));

function SumingEvenNumbers(obj){
let sum = 0;
function helper(obj){
    for(let val in obj){
        if(typeof obj[val] === "object"){
            helper(obj[val])
        }
        else if(obj[val] % 2 == 0){
            sum+= obj[val];
        }
    }
}
helper(obj);
return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};


console.log(SumingEvenNumbers(obj1));


function stringifyNumbers(obj){
    const newObj = JSON.parse(JSON.stringify(obj));
    for(let val in newObj){
        if(typeof newObj[val] === "object" && newObj[val] !== null){
            newObj[val] = stringifyNumbers(newObj[val])
        }
        else if(typeof newObj[val] === "number" && newObj[val] !== null){
            newObj[val] = String(newObj[val])
        }
    }
    return newObj;
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

console.log(stringifyNumbers(obj))


