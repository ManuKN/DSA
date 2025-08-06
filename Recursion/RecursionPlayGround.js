// const { createLogger } = require("vite");

function power(base, ex) {
  if (ex === 0) return 1;
  if (ex < 0) {
    return 1 / power(base, -ex);
  }
  return base * power(base, ex - 1);
}

console.log(power(2, 4));

function GoodNumbers(n) {
  if ((n = 0)) {
  }
}

function sortStackInRecursion(stack) {
  if (!stack.length) return "Empty stack";
  function InsertInSortedStack(stackElement, element) {
    if (
      !stackElement.length ||
      stackElement[stackElement.length - 1] <= element
    ) {
      stackElement.push(element);
      return;
    }

    const temp = stackElement.pop();
    InsertInSortedStack(stackElement, element);
    stackElement.push(temp);
  }

  function sortRecursively(stack) {
    if (!stack.length) return "Empty stack";
    const temp = stack.pop();

    sortRecursively(stack);
    InsertInSortedStack(stack, temp);
  }
  sortRecursively(stack);
  return stack;
}

console.log(sortStackInRecursion([11, 2, 32, 3, 41]));

/**
 * Reverses the order of elements in a given stack.
 *
 * This function uses a recursive approach to reverse the stack, utilizing a helper function to insert elements at the bottom of the stack.
 *
 * @param {Array} stack - The input stack to be reversed.
 * @returns {Array} The reversed stack, or 'Empty Stack' if the input stack is empty.
 */
function ReverseAStack(stack) {
  if (!stack.length) return "Empty Stack";
  if (stack.length === 0) return;
  let temp = stack.pop();

  ReverseAStack(stack);

  function insertABottom(stack, element) {
    //for each element we pass , this fucntion will call for all elements in the stack to make the stack empty and add that element that we send to the fucntion when stack is empty this makes the reverse of the string
    if (stack.length === 0) {
      stack.push(element);
      return;
    }
    let top = stack.pop();
    insertABottom(stack, element);
    stack.push(top);
  }
  insertABottom(stack, temp);
  return stack;
}

console.log(ReverseAStack([3, 1, 4, 2]));

//Time COmplexity = O(2^n)
//Space complexity = O(n)

// console.log(print(4));

/**
 * Generates all possible combinations of well-formed parentheses for a given number n.
 *
 * @param {number} n The number of pairs of parentheses to generate.
 * @returns {string[]} An array of strings, each representing a unique combination of well-formed parentheses.
 */
function GenerateParathesis(n) {
  let stack = [];
  let res = [];
  function backtacking(openN, closedN) {
    if (openN === n && closedN === n) {
      res.push(stack.join(""));
      return;
    }

    if (openN < n) {
      stack.push("(");
      backtacking(openN + 1, closedN);
      stack.pop();
    }
    if (closedN < openN) {
      stack.push(")");
      backtacking(openN, closedN + 1);
      stack.pop();
    }
  }
  backtacking(0, 0);
  return res;
}

console.log(GenerateParathesis(3));

function PrintAllSubsequencesPowerSet(str) {
  if (!str.length) return [""];

  const result = [];

  function generateSubsequences(index, currentSubsequence) {
    if (index === str.length) {
      result.push(currentSubsequence);
      return;
    }

    generateSubsequences(index + 1, currentSubsequence);

    generateSubsequences(index + 1, currentSubsequence + str[index]);
  }

  generateSubsequences(0, "");

  return result;
}

console.log(PrintAllSubsequencesPowerSet("abc"));

function PrefectSumProblem(arr, target) {
  if (!arr.length) return "Empty Array";
  let count = 0;
  function sumUp(index, currentSum) {
    if (index === arr.length) {
      if (currentSum === target) {
        count++;
      }
      return;
    }

    sumUp(index + 1, currentSum + arr[index]);
    sumUp(index + 1, currentSum);
  }
  sumUp(0, 0);
  return count;
}

console.log(PrefectSumProblem([2, 4, 6, 8], 8));

function BetterString(str1, str2) {
  if (!str1.length) return str2;
  if (!str2.length) return str1;
  let subsets1 = PrintAllSubsequencesPowerSet(str1);
  let subsets2 = subsets1.filter(
    (ele) => !PrintAllSubsequencesPowerSet(str2).includes(ele)
  );
  if (subsets1.length > subsets2.length) return str1;
  else if (subsets2.length > subsets1.length) return str2;
  else return str1;
}

console.log(BetterString("abc", "cba"));

function PrintAllSubsequencesPowerSet(nums) {
  if (!nums.length) return [""];

  const result = [];

  function generateSubsequences(index, currentSubsequence) {
    if (index === nums.length) {
      result.push([...currentSubsequence]);
      return;
    }

    generateSubsequences(index + 1, currentSubsequence);

    currentSubsequence.push(nums[index]);
    generateSubsequences(index + 1, currentSubsequence);
    currentSubsequence.pop();
  }

  generateSubsequences(0, []);

  return result;
}

console.log(PrintAllSubsequencesPowerSet([1, 2, 3]));

//Ganerate the Permutation of the array
var permute = function (nums) {
  const result = [];

  function generatePermutation(currentPermutation, remainingNums) {
    if (remainingNums.length === 0) {
      result.push([...currentPermutation]);
      return;
    }

    for (let i = 0; i < remainingNums.length; i++) {
      // Choose the current number and remove it from the remaining numbers
      currentPermutation.push(remainingNums[i]);
      generatePermutation(
        currentPermutation,
        remainingNums.filter((_, index) => index !== i) // Exclude the chosen number
      );
      // Backtrack
      currentPermutation.pop();
    }
  }

  generatePermutation([], nums);
  return result;
};

console.log(permute([1, 2, 3]));

//Generate the letter combination of the phone number.
//<Myapproach

function letterCombinations(digits) {
  const phone = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (!digits) return [];
  const result = [];
  function Generate(index, combination) {
    if (index === digits.length) {
      result.push(combination);
      return;
    }
    const letters = phone[digits[index]];
    for (const letter of letters) {
      Generate(index + 1, combination + letter);
    }
  }
  Generate(0, "");
  return result;
}

console.log(letterCombinations("567"));

//Restore IP Address

function restoreIpAddresses(s) {
  if (!s) return [];
  const results = [];
  function Generate(index, combination, parts) {
    if (parts === 4 && index === s.length) {
      results.push(combination);
      return;
    }

    if (parts >= 4 || index >= s?.length) {
      return;
    }

    for (let len = 1; len <= 3; len++) {
      if (index + len > s.length) break;
      const segment = s.substring(index, index + len);
      console.log(segment);
      if (isValidSegment(segment)) {
        Generate(
          index + len,
          combination + (parts > 0 ? "." : "") + segment,
          parts + 1
        );
      }
    }
  }

  function isValidSegment(segment) {
    if (segment.length > 1 && segment[0] === "0") return false;
    const num = parseInt(segment, 10);
    return num >= 0 && num <= 255;
  }

  Generate(0, "", 0);
  return results;
}

console.log(restoreIpAddresses("25525511135"));

function PhoneIp(digits) {
  const phone = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  if (!digits) return [];
  const results = [];
  function helper(index, combination) {
    if (index === digits.length) {
      results.push(combination);
      return;
    }

    const letters = phone[digits[index]];
    console.log(letters);
    for (let letter of letters) {
      helper(index + 1, combination + letter);
    }
  }
  helper(0, "");
  return results;
}

console.log(PhoneIp("345"));

function ArrayChunk(arr, size) {
  const result = [];
  if (!arr.length) return undefined;
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(ArrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

const obj = [
  { role: "user" },
  { role: "student" },
  { role: "user" },
  { role: "student" },
  { role: "user" },
];

const roles = ["user", "student"];

function groupObject(role, filObj) {
  let result = {};
  for (let i = 0; i < roles.length; i++) {
    result[role[i]] = filObj.filter((item) => item.role === role[i]);
  }
  return result;
}

console.log(groupObject(roles, obj));

//rotate array by K

function RotateArray(arr, k = 1) {
  return arr.slice(k).concat(arr.slice(0, k));
}

nums = [1, 2, 3, 4, 5, 6, 7];

console.log(RotateArray(nums, 3));

function secondlargest(arr) {
  const result = arr.sort((a, b) => b - a);
  return result[1];
}

console.log(secondlargest(nums));

function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result[result.length] = arr[i];
    }
  }
  return result;
}

console.log(removeDuplicates([1, 2, 3, 1, 2, 3, 4, 1]));

//Maximum subArray using kadanes algo
function MaxSubArray(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;   
}

console.log(MaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function TwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(TwoSum([2, 7, 11, 15], 13));

function BuyandSell(arr) {
  let buy = arr[0];
  let sell = 0;
  for (let i = 0; i < arr.length; i++) {
    const profit = arr[i] - buy;
    if (profit > sell) {
      sell = profit;
    }
    if (arr[i] < buy) {
      buy = arr[i];
    }
  }
  return sell;
}

console.log(BuyandSell([7, 1, 5, 3, 6, 4]));

function MissingNumbers(arr) {
  let max = arr.length;
  while (max > 0) {
    if (!arr.includes(max)) {
      if (max >= 0) return max;
      else return 0;
    }
    max--;
  }
}

console.log(MissingNumbers([0, 1]));

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => data % 2 === 0));

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].filter((data) => data % 2 === 0));

function ValidMatrix(matrix) {
  const n = matrix.length;

  for (let row of matrix) {
    if (row.length !== n) {
      return false;
    }
  }

  function isValidSet(arr) {
    const seen = new Set();

    for (let num of arr) {

      if (num < 1 || num > n) return false;


      if (seen.has(num)) return false;


      seen.add(num);
    }

    return seen.size === n;
  }

  for (let i = 0; i < n; i++) {
    const row = matrix[i];
    if (!isValidSet(row)) {
      return false;
    }
  }

  for (let j = 0; j < n; j++) {
    const col = [];      

    for (let i = 0; i < n; i++) {
      col.push(matrix[i][j]);
    }

    if (!isValidSet(col)) {
      return false;
    }
    return true;
  }
}

const grid1 = [
  [1, 2],
  [2, 1]
]

console.log(ValidMatrix(grid1)); 

function LongestSubStringWithoutRepeatingChars(str) {
  let maxLength = 0;
  let start = 0;
  const charIndexMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (charIndexMap.has(str[i])) {
      start = Math.max(start, charIndexMap.get(str[i]) + 1);
    }
    charIndexMap.set(str[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return {charIndexMap , maxLength};
}

console.log(LongestSubStringWithoutRepeatingChars("abcabcbb")); 
