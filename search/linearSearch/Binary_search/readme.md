# Binary Search

> 1: binary search is much faster from a search
> 2: Rather than eliminating one element at a time you can elemenate half of the remaining element at time.
> 3: binary search only works on a sorted array. 

## Binary search psudo code

> 1: the function accepts a sorted array.
> 2: create a left pointer at the start of the array, and a right pointer at the end of the array.
> 3: while the left pointer comes before the right pointer 
     > create a pointer at the middle
     > if you find the value you want, return the index
     > if the value is too small, move the left pointer up
     > if the value is too large, move the right pointer down 
> if you never find the value, return -1; 