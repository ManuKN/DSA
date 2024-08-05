function Timer2(n){
 return n * ( n + 1) / 2
}
const t1 = performance.now()
console.log(Timer2(6))
const t2 = performance.now()
console.log(`Elevated Time :${t2 - t1}`);