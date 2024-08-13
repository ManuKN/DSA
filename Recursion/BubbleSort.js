    function bubbleSort(arr){
    if(arr.length === 0) return 'empty array'
    let noswap = ''
    for(let i = 0; i<arr.length - 1 ; i++){
        noswap = true;
        for(let j = 0 ; j< arr.length - 1 - i; j++){
            let res = arr[j] - arr[j+1]
            if(res > 0){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                noswap= false
            }
        }
        if(noswap) break;
    }
    return arr
    }

    console.log(bubbleSort([56 , 23, 65, 778 ,12, 6]));