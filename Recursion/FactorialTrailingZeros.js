//naive approach
function TrialingZeros(n) {
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  let res = 0;
  while (fact % 10 === 0) {
    res++;
    fact /= 10;
  }
  return res;
}
console.log(TrialingZeros(10));

//Optimal solution
function TrailingZeros2(n) {
  let res = 0;
  for (let i = 5; i <= n; i = i * 5) {
    res = res + Math.floor(n / i);
  }
  return res;
}

console.log(TrailingZeros2(10));
