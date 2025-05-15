function binarySearch(arr, num) {
    if (arr.length === 0) return -1;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (num > arr[mid]) {
            start = mid + 1;
        }
        if (num < arr[mid]) {
            end = mid - 1;
        }
        if (arr[mid] === num) return mid;
    }
    return -1;
}

console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95));

function swap(i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function sortIt(arr) {
    if (!arr.length) return undefined;
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr)
            }
        }
    }
    return arr
}

console.log("swapping", sortIt([2, 1, 0, 2, 0, 1]))