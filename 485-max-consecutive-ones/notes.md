03-15-24

This problem was not in the NeetCode skilltree but was mentioned as a possible interview question.

The interview also asked that I know Python so index.py is provided.

My initial attempt in index.js relied on keeping track of the state before each element.

Made sense to me until I got to the end of the array.

Found that the answer relied on a similar idea of having a currentTotal and a maxTotal.

But the way for calculating the currentTotal was different. Instead of keeping track of the previous,

I just needed to keep a counter going of the current element being equal to 1, if not we set to 0 again.