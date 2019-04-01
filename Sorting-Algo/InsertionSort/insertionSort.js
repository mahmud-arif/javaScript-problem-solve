function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++){
    let currentVal = arr[i]; 
    for (let j = i - 1; j >= 0 && arr[j] > crurrentVal; j--){
      arr[j + 1] = arr[j]; 
    }
    arr[j + 1] = currentVal; 
  }
  return arr; 
}