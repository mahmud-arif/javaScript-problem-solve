## Helper method recursion

```js
function outer(input){
  var outerScopeVariable=[]; 

  function helper(helperInput){
    //modify the outerscope variable
    helper(helperInput--); 
  }

  helper(input); 
  return outerScopevariable; 
}
```

## Another Example
 try to collect all the odd values in an arry; 

 simulation of pure recurtion function collectionOddValues([1, 2, 3, 4, 5]); 

collectionOddValues([1, 2, 3, 4, 5])
[1].concat(collectionOddValues([2, 3, 4, 5]))
    [].concat(collectionOddValues([3, 4, 5]))
      [3].concat(collectionOddValues([4, 5]))
         [].concat(collectionOddValues([5]))
            [5].concat(collectionOddValues([]))
                    []

## pure Recursion tips

~ For arrays, use methods like slice spread operator and concat that make copies of arrays so you do not mutate them. 