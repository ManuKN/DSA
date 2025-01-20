//section9 - ex1

function Reverse(str){
 
 function helper(strArray){
   if(strArray.length === 0) return '';
      return strArray[strArray.length-1] + helper(strArray.slice(0 , strArray.length - 1))
 }

 function recursionMain(index){
  if(index === str.length) return [];
  const reversedString = helper(str[index]);
  return [reversedString , ...recursionMain(index + 1)]
 }
 return recursionMain(0);
}

console.log(Reverse(['malayalam' , 'nkn' , 'hello']));


// simplest solution
// function reverse(str) {
//   if (str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse('Manu'));