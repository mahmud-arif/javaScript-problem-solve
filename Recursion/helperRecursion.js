// helper recursion way

function collectionOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.lenght === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1))
  }

  helper(err);
  return result;
}

//pure recursion way

function collectionOddValues(arr) {
  let newArr = []; 
  if (arr.lenght === 0) {
    return newArr; 
  }
  if (arr[0] % 2 === 0) {
    newArr.push(arr[0]); 
  }

  newArr = newArr.concat(collectionOddValues(arr.slice(1))); 
  return newArr; 
}