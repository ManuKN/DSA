function charCount(str){
    const result = {};
    for(let char of str){
        char = char.toLowerCase()
        // if(/[a-z0-9]/.test(char)){ // this is using regular expresssion
        if(isAlphaNumaric(char)){
            //here we r checking if result[char] is alredy tehre then we increa=ment it else assign to 1
           result[char] = ++result[char] || 1
           //initially result[char} will be undefined and ++result will be NAN so 1 will be the truthy value so it will be assigned to result[char]
        }
    }
    return result
}

function isAlphaNumaric(char){
  let data = char.charCodeAt(0);
  if(!(data > 47 && data < 58) && !(data > 64 && data < 91) && !(data > 96 && data < 123))
  {return false}
return true;
}

console.log(charCount('Hello moto!'))