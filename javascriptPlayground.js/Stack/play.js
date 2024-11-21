function GreaterElementsUsingStack(arr) {
  if (!arr.length) return 'Empty array';
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let greaterElementAfter = -1;
    let greaterElementBefore = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        greaterElementAfter = Math.max(greaterElementAfter, arr[j]);
        break;
      }
    }
    if (i > 0) {
      for (let k = 0; k < i; k++) {
        if (arr[k] > arr[i]) {
          greaterElementBefore = Math.max(greaterElementBefore, arr[k]);
          break;
        }
      }
    }
    stack.push(
      greaterElementAfter !== -1 ? greaterElementAfter : greaterElementBefore
    );
  }
  return stack;
}
console.log(
  GreaterElementsUsingStack([1, 8, -1, -100, -1, 222, 1111111, -111111])
);

function PreviousSmallerElement(arr) {
  if (!arr.length) return 'Empty array';
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    let smallestElement = -1;
    if (i > 0) {
      for (let j = i - 1; j >= 0; j--) {
        if (arr[j] < arr[i]) {
          smallestElement = arr[j];
          break;
        }
      }
    }
    stack.push(smallestElement);
  }
  return stack;
}

console.log(PreviousSmallerElement([4, 5, 2, 10, 8]));
