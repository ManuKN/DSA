
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
  while(i < prefix.length){
    if (/^[a-zA-Z0-9]+/.test(prefix[i])) {
      stack.push(prefix[i]);
    }
    else{
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


function prefixtoinfix(string){
const prefix = string.split(" ");
 let stack  = [];
 let i=0;
 while(i < prefix.length){
  if(/^[a-zA-Z0-9]+/.test(prefix[i])){
    stack.push(prefix[i])
  }
  else{
    pop1 = stack.pop();
    pop2 = stack.pop();
    let concat = "(" + pop1 + prefix[i] + pop2 +")"
    stack.push(concat)
  }
  i++
 }
 return stack.pop();
}

console.log(prefixtoinfix("10 2 3 + / 4 5 * -"))

