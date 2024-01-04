/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var dupesRemoved = new Set(nums);
    if (dupesRemoved.size === nums.length) {
        return false;
    }
    return true;
};

console.log(containsDuplicate([1,2,3,1]));