var search = function(nums: string | any[], target: number) {
    let min = 0, max = nums.length-1;
    while (min < max){
        let mid = min + Math.floor((max-min+1)/2)
        if (target < nums[mid]) {
            max = mid -1;
        } else {
            min = mid;
        }
    }
    return nums[min] == target ? min : -1;
};

var nums = [1,2,3,4,5,6,7,8];
var target = 2;

console.log(search(nums, target));