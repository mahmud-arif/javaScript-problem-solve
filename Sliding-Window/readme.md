# SLIDING WINDOW

 this pattern involves creating a window which can either can be an array or number from one position to another

 depending on a certain condition, the window either increases or closes(and a new window is created)

 very useful for keeping track of a subset of data in an array/string etc

    ## An Example 
  Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

  ```javascript 
    maxSubarraySum([1,2,5,2,8,1,5],2) //10
    maxSubarraySum([1,2,5,2,8,1,5],4) //17
    maxSubarraySum([4,2,1,6],1) //6
    maxSubarraySum([], 4) // 0
    ```