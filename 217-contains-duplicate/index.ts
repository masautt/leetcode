var containsDuplicate = function(nums: string | any[] | Iterable<unknown> | null | undefined) {
    if (nums === null || nums === undefined) {
        return false;
    }
    
    if (Array.isArray(nums) || typeof nums === 'string') {

        var dupesRemoved = new Set(nums);
        if (dupesRemoved.size === nums.length) {
            return false;
        }
        return true;
    }
};

console.log(containsDuplicate([1,2,3,1]));