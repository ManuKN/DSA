function checkSquare(arr1, arr2) {
  if (!arr1.length || !arr2.length) return undefined;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let key of arr1) {
    frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
  }

  for (let key of arr2) {
    frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
  }

  for (let val in frequencyCounter2) {
    if (!(val ** 2 in frequencyCounter1)) {
      return false;
    }

    if (frequencyCounter1[val ** 2] !== frequencyCounter2[val]) {
      return false;
    }
  }
  return true;
}

console.log(checkSquare([4, 9, 16, 1], [1, 4, 3, 2]));

const asgd = Array.from({ length: 10 }, (_, i) => ({ id: i, isActive: false }));
console.log(asgd);

const nkn = "sdhgfh1d3s56uf"
  .split("")
  .map(parseInt)
  .filter((x) => x)
  .join("")
  .split("")
  .reverse()
  .splice(1, 3);

console.log(nkn);

const data = 10;

const promise = new Promise((resolve, reject) => {
  if (data > 5) {
    resolve("promise resolved");
  } else {
    reject(new Error("data is not greater than 5"));
  }
});

async function demo() {
  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

demo();

function test1() {
  let name = "Manu";

  function test2() {
    console.log(name);
  }

  return test2;
}

const g1 = test1();

g1();

const arr = [1000, 2000, 3000, 4000, -893, 3800, -450];

console.log(arr.map((n) => (n / 83).toFixed(0)));

function evenNO(k) {
  const evens = [];
  for (let i = 0; i < k; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
}

console.log(evenNO(10));

function tabelContsruction() {
  let tabel = "";

  tabel += " ";
  for (let i = 0; i < 10; i++) {
    tabel += i.toString().padStart(3, " ") + " ";
  }
  tabel += "\n";

  for (let i = 1; i <= 10; i++) {
    tabel += i.toString().padStart(2, " ") + " ";
    for (let j = 1; j <= 10; j++) {
      tabel += (i * j).toString().padStart(3, " ") + " ";
    }
    tabel += "\n";
  }
  return tabel;
}

console.log(tabelContsruction());

const objts = [
  { name: "Manu", count: 23 },
  { name: "vinay", count: 25 },
  { name: "darshan", count: 12 },
];

console.log(objts.sort((a, b) => a.name.localeCompare(b.name)));

//Number to Roman number

function toRoman(num) {
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const { value, numeral } of romanMap) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

console.log(toRoman(1000));

function someCode(arr, target) {
  let start = 0;
  while (start < arr.length) {
    let next = start + 1
    while (next < arr.length) {
      if (arr[next] + arr[start] === target) {
        return [start, next]
      }
      next++
    }
    start++
  }
  return "Not found"
}

console.log(someCode([2, 7, 11, 15], 13));


//very important💥💥
function longestPalindromicSubstring(str) {
  let start = 0;
  let next = 0;
  for (let i = 0; i < str.length; i++) {
    let len1 = expandFromCenter(str, i, i);
    let len2 = expandFromCenter(str, i, i + 1);
    let len = Math.max(len1, len2);

    if (len > next - start) {
      start = i - Math.floor((len - 1) / 2);
      next = i + Math.floor(len / 2);
    }
  }
  return str.slice(start, next + 1);
}

function expandFromCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

console.log(longestPalindromicSubstring("babad"));

function NumberToRoman(num) {
  const Roman = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  }

  let result = ""


  for (let i = 0; i < num.length; i++) {
    if (num[i] !== "0") {
      result += Roman[num[i]]
    }
  }
  return result
}

console.log(NumberToRoman("108796"));

function sortObject(obj) {
  const result = obj.sort((a, b) => a.name.localeCompare(b.name));
  return result
}

const obj = [{ name: "Manu" }, { name: "Vinay" }, { name: "Madhu" }];

console.log(sortObject(obj));


//worst senario
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isRepeated = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] == arr[j]) {
        isRepeated = true;
        break;
      }
    }
    if (!isRepeated) {
      result[result.length] = arr[i]
    }
  }
  return result;
}

function removeDuplicates2(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
    }
  }
  return result
}

function removeDuplicates3(arr) {
  return [...new Set(arr)]
}

console.log(removeDuplicates3([1, 2, 1, 3, 5, 7, 3]));

function createArrayUsingRecursion(arr, start = 0, result = []) {
  if (start >= arr.length) return result;
  let end = start;
  while (end + 1 < arr.length && arr[end] + 1 === arr[end + 1]) {
    end++
  }

  if (start === end) {
    result.push(arr[start].toString())
  } else {
    result.push([arr[start] + "->" + arr[end]])
  }
  return createArrayUsingRecursion(arr, end + 1, result)
}

console.log(createArrayUsingRecursion([0, 1, 2, 4, 5, 7]));

function reverseStringUsingRecursion(str) {
  let isString = false;
  if (!Array.isArray(str)) {
    str.split("");
    isString = true
  }
  let result = [];
  function helper(arr) {
    if (result.length === str.length) return result;
    result.push(arr[arr.length - 1])
    return helper(arr.slice(0, arr.length - 1))
  }
  helper(str)
  return isString ? result.join() : result;

}

console.log(reverseStringUsingRecursion("konga"))
console.log(reverseStringUsingRecursion(["k", "o", "n", "g", "y", "a", "l", "a", "m"]))

function generateParanthesis(n) {
  let stack = [];
  let res = [];
  function backtraking(openN, closedN) {
    if (openN === n && closedN === n) {
      res.push(stack.join(""));
      return;
    }

    if (openN < n) {
      stack.push("(")
      backtraking(openN + 1, closedN);
      stack.pop();
    }

    if (closedN < openN) {
      stack.push(")")
      backtraking(openN, closedN + 1);
      stack.pop();
    }
  }
  backtraking(0, 0);
  return res
}

console.log(generateParanthesis(3));

//brute force approach
function maximumSubArray(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      let currentSum = getSum(arr.slice(i, j))
      if (currentSum > max) {
        max = currentSum
      }
    }
  }
  return max
}

function getSum(arr) {
  let Sum = 0;
  for (let i = 0; i < arr.length; i++) {
    Sum += arr[i]
  }
  return Sum;
}

console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//kadanes algo for MaxSubArray;

function kadanesAlgo(arr) {
  let maxSoFar = arr[0];
  let currentSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i])
    maxSoFar = Math.max(currentSum, maxSoFar)
  }
  return maxSoFar;
}

console.log(kadanesAlgo([5, 4, -1, 7, 8]));


function swap(index1, index2, arr) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function sortAnArray(arr) {
  if (!arr.length) return 'Empty Array';
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
  return arr;
}
console.log("sfgdf", sortAnArray([2, 1, 0, 2, 0, 1]));

function MergeIntervals(intervals) {
  if (!arr.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]]
  for (let i = 0; i < intervals.length; i++) {
    const last = result[result.length - 1];
    const current = intervals[i];
    if (current[0] < last[1]) {
      last[1] = Math.max(last[1], current[1])
    } else {
      result.push(current)
    }
  }
  return result;
}

console.log(MergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));


function SubsetUsingRecursion(arr) {
  let result = [];
  function backtraking(start, path) {
    result.push([...path]);
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtraking(i + 1, path);
      path.pop()
    }
  }
  backtraking(0, []);
  return result;
}

console.log(SubsetUsingRecursion([1, 2, 3]));

function validParenthese(str) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "["
  }
  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char)
    } else {
      if (stack.pop() !== map[char]) {
        return false
      }
    }
  }
  return stack.length === 0;
}

console.log(validParenthese("()[]{}"));

function hammingDistance(x, y) {
  let xor = x ^ y;
  let distance = 0;
  while (xor > 0) {
    distance += xor & 1;
    xor >>= 1;
  }
  return distance;
}

console.log(hammingDistance(1, 4));

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  }

  pop() {
    const popped = this.stack.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}


const minStack = new MinStack();
minStack.push(-3);
minStack.push(2);
minStack.push(4);
minStack.push(-1);
console.log(minStack)
console.log(minStack.getMin());
console.log(minStack.top())


