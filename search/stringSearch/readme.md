## Naive String Search

<ul>
<li>Suppose you want to count the number of times a smaller string appear in a longer string
</li>
<li>A straightForward approach involves cheeking pairs of charecter indivisually</li>
</ul>

### Pseudocode for naive String Search

<ul>
<li>Loop over the longer string</li>
<li>Loop ovet the shorter string</li>
<li>If the charecters don't match, break out the inner loop</li>
<li>If the charcter do match, keep going </li>
<li>If you complete the inner loop and find a match, increment the count of matches</li>
<li>return the count</li>
</ul>