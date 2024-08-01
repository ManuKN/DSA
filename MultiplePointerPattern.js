// given a array which is sorted now we need to check a pair which give 0 as a sum ex -3 +3 = 0 amd then we have to return that pair 
//Using multiple pointer pattern

function mpPattern(arr){
    let left = 0;
    let right = arr.length - 1
     
    while(left < right)
    {
        const sum = arr[left] + arr[right]
        if(sum === 0)
        {
            return [arr[left],arr[right]]
        }
        else if(sum > 0){
           right--
        }
        else{
            left++
        }

    }
}

console.log(mpPattern([-3 , -2 , -1 , 0 , 1 , 5 , 8]))

const arr =['manu','tejas','arjun']
let search = 'a';
const result = arr.filter(e => e.includes(search));
console.log(result)