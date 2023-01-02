from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_length = len(nums)
        for i, num in enumerate(nums):
            for j in range(i + 1, nums_length):
                if (num + nums[j]) == target:
                    return [i, j]