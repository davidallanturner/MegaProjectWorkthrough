function reverse(input) {
 let original = [...input];
 //console.log(typeof(original))
 //console.log("original: " + original)
 let reverse = [];
 for(let i=original.length-1; i>=0; i--){
 // console.log("current original[i]: " + original[i])
  reverse.push(original[i])
 }
 //console.log(reverse)
 return reverse
}

function palindromeCheck(input) {
 let original = [...input];
 console.log(original)
// console.log(Array.isArray(original))
 console.log(`Original: ${original} \n Reverse: ${reverse(input)}`)
 if(JSON.stringify(original) === JSON.stringify(reverse(input))){
  return true
 }
 return false
}

palindromeCheck(hello);
