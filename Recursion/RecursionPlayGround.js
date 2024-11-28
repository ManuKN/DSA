function power(base, ex) {
  if (ex === 0) return 1;
  if (ex < 0) {
    return 1 / power(base, -ex);
  }
  return base * power(base, ex - 1);
}

console.log(power(2.0, 10));

function GoodNumbers(n) {
  if ((n = 0)) {
  }
}
