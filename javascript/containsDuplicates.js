// Given an integer array nums, 
// and return true if any value appears at least twice in the array, 
// and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set(nums);
    if (nums.length != numsSet.size) return true;
    return false;
 };

// or is this better
// var containsDuplicate = function(nums) {
//     const uniqueNumsArray = Array.from(new Set(nums));
//     if (nums.length != uniqueNumsArray.length) return true;
//     return false;
// };