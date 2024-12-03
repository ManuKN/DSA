function power(base, ex) {
  if (ex === 0) return 1;
  if (ex < 0) {
    return 1 / power(base, -ex);
  }
  return base * power(base, ex - 1);
}

console.log(power(2, -3));

function GoodNumbers(n) {
  if ((n = 0)) {
  }
}

function sortStackInRecursion(stack) {
  if (!stack.length) return 'Empty stack';
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
    if (!stack.length) return 'Empty stack';
    const temp = stack.pop();
    sortRecursively(stack);
    InsertInSortedStack(stack, temp);
  }
  sortRecursively(stack);
  return stack;
}

console.log(sortStackInRecursion([11, 2, 32, 3, 41]));

function ReverseAStack(stack) {
  if (!stack.length) return 'Empty Stack';
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

function print(num) {
  let word = '';
  let final = [];
  word += '0';
  GenerateWithoutConsecutive1s(word, num);
  word += '1';
  GenerateWithoutConsecutive1s(word, num);

  function GenerateWithoutConsecutive1s(str, num) {
    let len = str.length;
    if (num === 0) return undefined;
    if (num === len) {
      final.push(str);
      return;
    } else if (str[len - 1] == '1') {
      GenerateWithoutConsecutive1s(str + '0', num);
    } else {
      GenerateWithoutConsecutive1s(str + '0', num);
      GenerateWithoutConsecutive1s(str + '1', num);
    }
  }
  return final;
}

//Time COmplexity = O(2^n)
//Space complexity = O(n)

console.log(print(4));

function GenerateParathesis(){
}