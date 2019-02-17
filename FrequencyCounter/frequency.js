// naiv solution

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i]**2);

    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }

  return true; 
}


// refactor 

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const frequncyCounter1 = {}; 
  const frequncyCounter2 = {}; 
  for (val of arr1) {
    frequncyCounter1[val] = (frequncyCounter1[val] || 0) + 1; 
  }
  for (val of arr2) {
    frequncyCounter2[val] = (frequncyCounter2[val] || 0) + 1;
  }

  for (key in frequncyCounter1) {
    if (!(key ** 2 in frequncyCounter2)) {
      return false; 
    }
    if (frequncyCounter1[key] !== frequncyCounter2[key ** 2]) {
      return false; 
    }

  }
  return true; 
}