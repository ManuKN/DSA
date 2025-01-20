/**
 * Recursively flattens a nested array into a one-dimensional array.
 * Returns "empty array" if the input array is empty.
 * @param {Array} arr - The input array to be flattened
 * @returns {Array|string} - The flattened array or "empty array" if input is empty
 */

function flatten(arr) {
  if (arr.length === 0) return 'empty array';
  let flattenedArray = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenedArray = flattenedArray.concat(flatten(element));
    } else {
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
}

console.log(flatten([1, 2, [7, 9], 4, [[5, 6]]]));
