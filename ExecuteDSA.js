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


//Call polyfill
Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== "function") {
        throw new TypeError("Call is not callabel")
    }

    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result
}

Function.prototype.myApply = function (context, [...args]) {
    if (typeof this !== "function") {
        throw new TypeError("myApply can be Callable")
    }

    context.fn = this;
    const result = context.fn(...args)
    delete context.fn
    return result;
}

Function.prototype.myBind = function (context, ...args) {
    if (typeof this !== "function") {
        throw new Error("myBind ca not be Callabel")
    }

    context.fn = this;
    return (...newArgs) => {
        return this.apply(context, [...args, ...newArgs])
    }
}


function greet(age, city) {
    console.log(`Hello ${this.name}, Age: ${age}, City: ${city}`);
}

const user = { name: "John" };

const greetCall = greet.myBind(user, 25, "Bengaluru");
greetCall()


function flatArray(arr) {
    let flattendedArray = []
    let index = 0;
    function helper(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                helper(arr[i])
            } else {
                flattendedArray[index] = arr[i];
                index++
            }
        }
    }
    helper(arr);
    return flattendedArray;
}


Array.prototype.myReduce = function (callback, init) {
    if (typeof callback !== "function") {
        throw new Error(`${callback} is not a fucntion`)
    }

    let accummulator = init;
    let startindex = 0;
    if (accummulator === undefined) {
        if (this.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value")
        }
        accummulator = this[0];
        startindex = 1;
    }

    for (let i = startindex; i < this.length; i++) {
        accummulator = callback(accummulator, this[i], i, this)
    }

    return accummulator;
}

const arr = [1, 2, [1, 2, 3, [1, 3, 4]]];


function ReduceFlat(arr) {
    return arr.myReduce((acc, val) => acc.concat(Array.isArray(val) ? ReduceFlat(val) : val), []);
}

console.log(ReduceFlat(arr))


function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);
        let area = width * minHeight;
        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxWater;
}

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights));


