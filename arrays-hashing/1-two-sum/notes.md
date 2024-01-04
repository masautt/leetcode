11/26/23

What's facinating about this one is that the original index.js fails

But only when we start dealing with zeros. And that's a JavaScript thing

https://chat.openai.com/share/3f5cdf12-70aa-4233-a9aa-ecf1ffa19aad


The issue with your twoSum algorithm is that it doesn't handle the case where the value in the cache is at index 0. In JavaScript, when you check if (cache[nums[i]]), it will return false if the value at nums[i] is 0 because the condition is falsy.

Okay so it sounds like twoSum has a second one TwoSum Sorted and that one you can use 
two points or binary search?