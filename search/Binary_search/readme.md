# Binary Search
><ol>
> <li>binary search is much faster from a search</li>
> <li>Rather than eliminating one element at a time you can elemenate half of the remaining element at time.</li>
> <li>binary search only works on a sorted array. </li>
></ol>
## Binary search psudo code
><ol>
> <li>1: the function accepts a sorted array.</li>
><li> 2: create a left pointer at the start of the array, and a right pointer at the end of the array.</li>
><li> 3: while the left pointer comes before the right pointer </li>
    ><ol>
     ><li> create a pointer at the middle</li>
     ><li> if you find the value you want, return the index</li>
     ><li> if the value is too small, move the left pointer up</li>
     ><li> if the value is too large, move the right pointer down </li>
    ></ol>
><li>if you never find the value, return -1;</li> 
></ol>