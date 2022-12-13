// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let mapObject = {};
    for (let i = 0; i < nums.length; i++) {
        mapObject[nums[i]] = (mapObject[nums[i]] || 0) + 1;
    }
    let smallestCountVal = Math.min(...Object.values(mapObject));
    let singleNum;
    Object.entries(mapObject).forEach(([key, value]) => {
      if (smallestCountVal === value) {
        singleNum = key;
      }
    });
    return singleNum;
};