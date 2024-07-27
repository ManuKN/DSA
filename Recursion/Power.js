function power(base , ex){
if(ex === 0) return 1
return base * power(base , ex-1)
}

console.log(power(4 , 2))