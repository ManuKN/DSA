function findPairMultiplePointer(arr, n) {
  let start = 0;
  let next = 0;
  for (let i = start; i < arr.length; i++) {
    for (let j = next; j < arr.length; j++) {
      if (arr[i] - arr[j] == n) {
        return true;
      }
    }
  }
  return false;
}

console.log(findPairMultiplePointer([-4, 4], 8));

function findPairFrequnecyPattern(arr, n) {
  if (!arr.length) return true;
  let frequencyPattern = {};
  for (let key of arr) {
    frequencyPattern[key] = (frequencyPattern[key] || 0) + 1;
  }

  const frequences = Object.keys(frequencyPattern);

  for (let key of frequences) {
    const currentNumber = Number(key);
    if (frequencyPattern[currentNumber + n]) {
      return true;
    }
    if (frequencyPattern[currentNumber - n]) {
      return true;
    }
  }
  return false;
}

console.log(findPairFrequnecyPattern([4, -2, 3, 10], -6));
