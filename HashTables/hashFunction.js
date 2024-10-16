///With out using prime number
function hash(key, arrLength) {
  let total = 0;
  for (let i = 0; i < arrLength; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrLength;
  }
  return total;
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  //hash fucntion using primenumber and which is also very optimistic and avoid collision and helps in data distributions
  _hash(key) {
    let total = 0;
    const wierdPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0);
      total = (total * wierdPrime + value) % this.keyMap.length;
    }
    return total;
  }

  Set(key, value) {
    let index = this._hash(key);
    if (!Array.isArray(this.keyMap[index])) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  Get(key) {
    let index = this._hash(key);
    if (!Array.isArray(this.keyMap[index])) {
      return 'No data';
    }
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] == key) return this.keyMap[index][i][1];
    }
  }

  Keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (Array.isArray(this.keyMap[i])) {
        this.keyMap[i].forEach((element) => {
          if (!keys.includes(element[0])) {
            keys.push(element[0]);
          }
        });
      }
    }
    return keys;
  }

  Values() {
    let values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (Array.isArray(this.keyMap[i])) {
        this.keyMap[i].forEach((element) => {
          if (!values.includes(element[1])) {
            values.push(element[1]);
          }
        });
      }
    }
    return values;
  }
}

const Hash = new HashTable();
console.log(Hash.Set('pink', '#675436'));
console.log(Hash.Set('yellow', '#675437'));
console.log(Hash.Set('Green', '#6754311'));
console.log(Hash.Set('AreweDone', 'yes'));
console.log(Hash.Set('NKN', 'macha'));
console.log(Hash);
console.log(Hash.Get('AreweDone'));
console.log(Hash.Keys());
console.log(Hash.Values());
