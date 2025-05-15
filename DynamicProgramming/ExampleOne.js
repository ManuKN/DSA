function Fibenoccie(num) {
  if (num <= 2) return 1;
  return Fibenoccie(num - 1) + Fibenoccie(num - 2);
}

console.log(Fibenoccie(5));

//Dymamic programming using memoization technique

function fibenocie_memo(num, memo = []) {
  if (memo[num] !== undefined) return memo[num];
  if (num <= 2) return 1;
  let res = fibenocie_memo(num - 1, memo) + fibenocie_memo(num - 2, memo);
  memo[num] = res;
  return res;
}

console.log(fibenocie_memo(250));

//Dymamic programming using Tabulation

function fibenocie_tabal(num) {
  if (num <= 2) return 1;
  let fibNum = [0, 1, 1];
  for (let i = 3; i <= num; i++) {
    fibNum[i] = fibNum[i - 1] + fibNum[i - 2];
  }
  return fibNum[num];
}

console.log(fibenocie_tabal(22));


//Done and dusted Data Structure Course of Colt😁😁💥💥
//keep hustling for the difficult concepts and daily atleast 1 or 2 DSA problems minimum
//NKN madbeku aste

const object = {
  a:2,
  b:this.a
}

console.log(object)