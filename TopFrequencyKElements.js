function Kcounter(arr, k) {
  let data = [];
  if (!arr.length) {
    return false;
  }
  const frequencyCounter1 = {};
  for (let val of arr) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  console.log(frequencyCounter1);

  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] >= k && frequencyCounter1[key]) {
      data.push(key);
    }
  }
  return data;
}

console.log(Kcounter([1, 1, 2, 3, 4, 5, 5, 5, 6], 2));
