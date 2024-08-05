function Timer1(n){
    let total=0;
    for(let i = 1; i <= n; i++)
    {
        total += i
    }
    return total
}
const t1 = performance.now()
console.log(Timer1(4))
const t2 = performance.now()
console.log(`Elevated Time: ${t2 - t1}`)