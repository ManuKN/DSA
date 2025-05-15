function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(8));

const t1 = performance.now();
console.log(factorial(4));
const t2 = performance.now();
console.log(`Elevated Time: ${t2 - t1}`);

