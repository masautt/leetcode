/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
    var cache = {};
    for (var i = 0; i < nums.length; i++) {
        if (cache[nums[i]]) {
            return [nums.indexOf(cache[nums[i]]), i]
        }
        cache[target - nums[i]] = nums[i];
    }
    return [];
};
