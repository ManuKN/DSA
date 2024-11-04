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
  let largestNo = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNo) {
      largestNo = arr[i];
    }
  }
  return largestNo;
}

console.log(playfground([ 114, 3, 65, 7, 89, 69 , 100]));
