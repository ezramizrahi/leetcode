// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let mapObject = {};
    for (let i = 0; i < nums.length; i++) {
        mapObject[nums[i]] = (mapObject[nums[i]] || 0) + 1;
    }
    let highestCountVal = Math.max(...Object.values(mapObject));
    let majorityElement;
    Object.entries(mapObject).forEach(([key, value]) => {
      if (highestCountVal === value) {
        majorityElement = key;
      }
    });
    return majorityElement;
};