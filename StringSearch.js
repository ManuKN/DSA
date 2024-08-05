//important⭐⭐⭐⭐⭐

function stringSearch(longstring , shortstring){
    let Count = 0;
    let damiivar = ''
    let i =0;
    if(longstring.length === 0 || shortstring.length === 0) return Count;
    while(i < longstring.length){
    let j = 0; // here we r keeping j inside the outer loop because once we breakout of the inner loop we need to reset the j value
    damiivar=''; // if no matching string found we r going to empty the dammivar
    while(j < shortstring.length && i + j < longstring.length)
    {
        //here we used i+j cause if i match one string then i need to cantinue right  
        if(longstring[i + j] === shortstring[j]){
            damiivar += shortstring[j]
            j++
        }
        else {
            break
        }
    }
    if(damiivar === shortstring){
        Count++
    }  
    i++
}
 return Count
}

console.log(stringSearch('presidency universityiver','iver'))