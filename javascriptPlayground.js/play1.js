const object1 = {
  name: 'Manu',
  clg: 'Presidency',
  place: 'Bengaluru',
};

const object2 = {};

Object.assign(object2, object1);

console.log(object2);

function playfground(arr) {
  if (!arr.length) return 'Empty Array';
  if (arr.length === 1) return -1;

  // let largestNo = [];
  const sorted = arr.sort((a, b) => b - a);
  console.log(sorted);
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > largestNo) {
  //     largestNo.push(arr[i]);
  //   }
  // }
  return sorted[1];
}

//finding the second smallest and largest with better approach if u want to mak eit even better make diffrent function for small and large and call them.
function playground2(arr) {
  if (!arr.length) return 'Empty Array';
  if (arr.length === 1) return -1;
  let large = -Infinity;
  let secondLarge = -Infinity;
  let small = Infinity;
  let secondSmall = Infinity;
  for (let i = 0; i < arr.length; i++) {
    small = Math.min(small, arr[i]);
    large = Math.max(large, arr[i]);
  }
  for (let j = 0; j < arr.length; j++) {
    console.log(secondSmall)
    if (arr[j] < secondSmall && arr[j] != small) secondSmall = arr[j];
    if (arr[j] > secondLarge && arr[j] != large) secondLarge = arr[j];
  }
  console.log('secondSmall', secondSmall);
  console.log('secondLarge', secondLarge);
}

console.log(playground2([114, 3, 65, 7, 89, 69, 100]));
