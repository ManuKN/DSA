
function swap(index1, index2, arr) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function sortAnArray(arr) {
  if (!arr.length) return 'Empty Array';
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
  return arr;
}

console.log(sortAnArray([2, 1, 0, 2, 0, 1]));

function infixTopostfix(infix) {
  const priority = {
    '^': 3,
    '(': 2,
    ')': 2,
    '*': 1,
    '/': 1,
    '+': -1,
    '-': -1,
  };
  let i = 0;
  let postfix = '';
  let stack = [];
  while (i < infix.length) {
    if (/^[a-zA-Z0-9]$/.test(infix[i])) {
      postfix += infix[i];
    } else if (infix[i] == '(') {
      stack.push(infix[i]);
    } else if (infix[i] == ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        postfix += stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        priority[infix[i]] <= priority[stack[stack.length - 1]]
      ) {
        postfix += stack.pop();
      }
      stack.push(infix[i]);
    }
    i++;
  }
  while (stack.length) {
    postfix += stack.pop();
  }
  return postfix;
}

console.log(infixTopostfix('(a + b * (c ^ (d - e))) ^ (f + g * h - i)'));
//a b c d e - ^ * + f g h * + i - ^

function infixToprefix(infix) {
  const reversedinfix = infix.split('').reverse().join('');
  const maped = reversedinfix.split('').map((el) => {
    if (el == '(') {
      el = ')';
    } else if (el == ')') {
      el = '(';
    } else return el;
  });
  const infix2 = maped.join('');
  const priority = {
    '^': 3,
    '(': 2,
    ')': 2,
    '*': 1,
    '/': 1,
    '+': -1,
    '-': -1,
  };
  let i = 0;
  let postfix = '';
  let stack = [];
  while (i < infix2.length) {
    if (/^[a-zA-Z0-9]$/.test(infix2[i])) {
      postfix += infix2[i];
    } else if (infix2[i] == '(') {
      stack.push(infix2[i]);
    } else if (infix2[i] == ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        postfix += stack.pop();
      }
      stack.pop();
    } else {
      if (infix2[i] == '^') {
        while (
          stack.length &&
          priority[infix2[i]] <= priority[stack[stack.length - 1]]
        ) {
          postfix += stack.pop();
        }
      } else {
        while (
          stack.length &&
          priority[infix2[i]] < priority[stack[stack.length - 1]]
        ) {
          postfix += stack.pop();
        }
      }

      stack.push(infix2[i]);
    }
    i++;
  }
  while (stack.length) {
    postfix += stack.pop();
  }
  const posfixedData = postfix;
  return posfixedData.split('').reverse().join('');
}

console.log(infixToprefix('(a + b * (c ^ (d - e))) ^ (f + g * h - i)'));

function postfixToinfix(string) {
  const prefix = string.split(' ')
  const stack = [];
  let i = 0;
  while (i < prefix.length) {
    if (/^[a-zA-Z0-9]+/.test(prefix[i])) {
      stack.push(prefix[i]);
    }
    else {
      let pop1 = stack.pop();
      let pop2 = stack.pop();
      let concat = "(" + pop2 + prefix[i] + pop1 + ")";
      stack.push(concat);
    }
    i++
  }
  return stack.pop()
}

console.log(postfixToinfix("10 2 3 + / 4 1 - * 5 +"))


function prefixtoinfix(string) {
  const prefix = string.split(" ");
  let stack = [];
  let i = 0;
  while (i < prefix.length) {
    if (/^[a-zA-Z0-9]+/.test(prefix[i])) {
      stack.push(prefix[i])
    }
    else {
      pop1 = stack.pop();
      pop2 = stack.pop();
      let concat = "(" + pop1 + prefix[i] + pop2 + ")"
      stack.push(concat)
    }
    i++
  }
  return stack.pop();
}

console.log(prefixtoinfix("10 2 3 + / 4 5 * -"))

const arr = [12, 2, 3, 4, 5, 5, 55]
const hashMap = {};

for (let i = 0; i < arr.length; i++) {
  if (hashMap[arr[i]]) {
    hashMap[arr[i]] += 1
  } else {
    hashMap[arr[i]] = 1
  }
}

console.log("hashmap", hashMap)

const removedDuplicate = Object.keys(hashMap).map((val) => Number(val));
console.log(removedDuplicate, "removed");

Array.prototype.customMap = function (callback) {
  if (!this.length) return "Empty Array";

  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};


const nums = [1, 2, 3, 4];

const doubled = nums.customMap((value) => {
  return value * 2;
});

console.log(doubled);

Array.prototype.customFilter = function (callback) {
  if (!this.length) {
    return "Empty Array";
  }

  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

const arr2 = [1, 2, 3, 4, 5, 6];

const result = arr2.customFilter((val, i, arr) => val % 2 !== 0);
console.log(result);

Array.prototype.customReducer = function (callback, initailValue) {
  if (!this.length) {
    return "Empty Array";
  }
  let accumulator = initailValue !== undefined ? initailValue : this[0];
  let startIndex = initailValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this)
  }
  return accumulator;
}

const arr3 = [2, 3, 4, 5, 6];

const nknResult = arr3.customReducer((acc, val) => acc + val, 0);

console.log(nknResult);

Function.prototype.customCall = function (context, ...args) {
  context = context || window;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result
}



function firstAndSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i]
    }
  }
  return { largest, secondLargest }
}

console.log(firstAndSecondLargest([21, 34, 565, 12, 34]));

function objectSorting(obj) {
  const sortedEntries = Object.entries(obj).sort((a, b) => {
    const valA = a[1];
    const valB = b[1];

    console.log(valA);
    console.log(valB);
    if (typeof valA === "number" && typeof valB === "number") {
      return valA - valB;
    }
    return String(valA).localeCompare(String(valB));
  });
  let newObj = {};
  for (const [key, value] of sortedEntries) {
    newObj[key] = value;
  }
  return newObj;
}
console.log(objectSorting({ a: 4, b: 8, c: 2, d: 9, e: 1 }));

function maxwater(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let area = width * minHeight;
    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}

console.log(maxwater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

function mergeIntervals(intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 0; i < intervals.length; i++) {
    const last = result[result.length - 1];
    const current = intervals[i];
    if (current[0] < last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current)
    }
  }
  return result;
}

console.log(mergeIntervals([[1, 4], [4, 5]]))