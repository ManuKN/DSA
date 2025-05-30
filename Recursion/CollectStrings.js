// const { createLogger } = require("vite");

function collectStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      result = result.concat(collectStrings(obj[key]));
    } else {
      if (typeof obj[key] === "string") {
        result.push(obj[key]);
      }
    }
  }
  return result;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
            nkn: "benki",
          },
        },
      },
    },
  },
};
console.log(collectStrings(obj));

function COllectingsPractice(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      result = result.concat(COllectingsPractice(obj[key]));
    } else {
      if (typeof obj[key] === "string") {
        result.push(obj[key]);
      }
    }
  }
  return result;
}

console.log(COllectingsPractice(obj));
