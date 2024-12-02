//section9 - ex1

function reverse(str){
 const strArray = str.split('');
 console.log(strArray)
 function helper(strArray){
   if(strArray.length === 0) return ''
      return strArray[strArray.length-1] + helper(strArray.slice(0 , strArray.length - 1))
 }
return helper(strArray)
}

console.log(reverse('malayalam'))

//simplest solution
// function reverse(str) {
//   if (str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse('Manu'));