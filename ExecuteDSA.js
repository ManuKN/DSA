function GreaterElementsUsingStack(arr) {
    if (!arr.length) return 'Empty array';
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        let greaterElementAfter = -1;
        let greaterElementBefore = -1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                greaterElementAfter = Math.max(greaterElementAfter, arr[j]);
                // console.log(greaterElementAfter)
                break;
            }
        }
        if (i > 0) {
            for (let k = 0; k < i; k++) {
                if (arr[k] > arr[i]) {
                    greaterElementBefore = Math.max(greaterElementBefore, arr[k]);
                    break;
                }
            }
        }
        stack.push(
            greaterElementAfter !== -1 ? greaterElementAfter : greaterElementBefore
        );
    }
    return stack;
}

console.log(GreaterElementsUsingStack([3, 1, 2, 4]));