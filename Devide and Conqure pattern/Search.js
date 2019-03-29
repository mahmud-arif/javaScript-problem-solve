//naiv solution

function search(arr, val) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === val) {
      return i; 
    }
  }
  return -1; 
}

// refactor devide and conqure 

function search(arr, val) {
    
  let min = 0; 
  let max = arr.length - 1; 

  while (min <= max) {
    let middle = Math.floor((min + max) / 2); 
    let currentValue = arr[middle]; 

    if (currentValue < val) {
      min = middle + 1;
    }
    else if (currentValue > val) {
      max = middle - 1;
    }
    else return middle; 
  }

  retun - 1; 
}