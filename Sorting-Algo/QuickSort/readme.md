## Quick Sort

* Like merge sort, exploits the fact that arrays of 0 or 1 element are always sort . 
* Works by selecting one element (called the pivot) and finding the index where the pivote should end up in the sorted array. 
* Once the pivot is positioned appropriately, quick can be applied on either side of pivot
---
---

## pivote Helper function

* In order to implement quick sort, it is useful to first implement a function responsible arranging elements in an array in an either side of pivot
* Given an array, this helper function should designate an element as the pivot
* it should then arrange the elements in the array so that all the values less than the pivot are moved to the left of the pivot, and all values grather than the pivot are moved to the right of the pivot 
* The order of elements on either side of the pivot doesn't matter
* The helper shoud do it in place, that is, it should not create a new array
* When complete the helper should return the index of the pivot

---

## Picking a pivot

* The runtime of quick sort depends in part on how one selects the pivot
* Ideally, the pivot should be chosen so that its roughly the medium value in the data set you are sorting ( but it is hard, we don't all about our data); 
* For simplicity, we'll always choose the pivot to be the first element.

--- 
## pivot helper pseudoCode

* It will help to accept three arguments: an array, a start index, and end index
* Grab the pivot from the start of the array
* store the current pivot index in a variable (this will keep track where the pivot should end up)
* Loop through the array from the start until the end 
  * If the pivot is greater than the current element, increment the pivot index varible and then swap the current element with the element at the pivot index
* swap the starting element(i.e. the pivot) with the pivot index
* return the pivot index
---
---

## QuickSort pseudoCode

* Call the pivot helper in the array
* When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
* your base case occurs when you consider a subarray with less than 2 elements