//Using Recursion
function capitalizeFirst(arr) {
  let newArray = [];
  function helper(arr) {
    if (arr.length === 0) return newArray;
    newArray.push(arr[0][0].toUpperCase() + arr[0].slice(1, arr[0].length));
    helper(arr.slice(1, arr.length));
  }
  helper(arr);
  return newArray;
}

//Normal iteration method
// function capitalizeFirst(arr){
//    if(arr.length === 0) return 'Empty array'
//    const newArray = arr.map(element => {
//     return element[0].toUpperCase() + element.slice(1 , element.length)
//    });
//    return newArray;
// }

console.log(capitalizeFirst(['manu', 'chethan', 'manoj', 'chindi']));
