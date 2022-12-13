/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let runningSumArray = new Array(nums.length);
    runningSumArray[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        runningSumArray[i] = runningSumArray[i-1] + nums[i];
    };
    return runningSumArray;
};

// or

var runningSumWithMap = function(nums) {
    let currentSum = 0;
    return nums.map((num) => currentSum += num);
};