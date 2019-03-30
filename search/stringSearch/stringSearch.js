function stringSearch(longStr, shortStr) {
  let count = 0; 
   for(let i = 0; i < longStr.length; i++){
    for(let j = 0; j < shortStr.length; j++){
      if (shortStr[j] !== longStr[i + j]) {
        break;
      } 
      if (j === shortStr.length - 1) count++; 
    }
  }
  return count; 
}

console.log(stringSearch("lorie loled", "l")); 