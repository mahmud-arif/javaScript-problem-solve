# Binary Search
><ol>
> <li>binary search is much faster from a search</li>
> <li>Rather than eliminating one element at a time you can elemenate half of the remaining element at time.</li>
> <li>binary search only works on a sorted array. </li>
></ol>
## Binary search psudo code
><ol>
> <li> the function accepts a sorted array.</li>
><li>  create a left pointer at the start of the array, and a right pointer at the end of the array.</li>
><li> while the left pointer comes before the right pointer</li>
      create a pointer at the middle
      if you find the value you want, return the index
      if the value is too small, move the left pointer up
      if the value is too large, move the right pointer down
><li>if you never find the value, return -1;</li> 
></ol>