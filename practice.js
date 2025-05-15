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
