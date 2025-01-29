index.js is the final solution based on neetcode's video
https://www.youtube.com/watch?v=1pkOgXD63yU

index3.js was my first try. I was missing the check I later found in his video to verify that prices[l] < prices[r]

This makes sense because we only want to consider new solutions when we can sell higher (r) than the buying prices (l)

index2.js was one step closer but I had the same mistake he outlined in the video. My solution with the default example passed but 

When we had someone that [0, 9] at the end it failed because l did not know how to jump to r when a new profit came about

This exmplains the else { l = r }