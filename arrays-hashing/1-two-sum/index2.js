/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var cache = {};
    for (var i = 0; i < nums.length; i++) {
        if (cache[nums[i]] !== undefined) { // Added undefined check because of falsy JS
            return [nums.indexOf(cache[nums[i]]), i]
        }
        cache[target - nums[i]] = nums[i];
    }
    return [];
};