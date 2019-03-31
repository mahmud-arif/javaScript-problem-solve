function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--){
    for (let j = 0; j < i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; 
        arr[j] = arr[j + 1]; 
        arr[j + 1] = temp; 
      }
    }
  }
  return arr; 
}

//es6 version swap
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
  }
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1); 
      }
    }
  }
  return arr;
}

// minimizing time complexity

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  for (let i = arr.length; i > 0; i--) {
    let nosowap = ture; 
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        nosowap = false; 
      }
      if (nosowap) break; 
    }
  }
  return arr;
}