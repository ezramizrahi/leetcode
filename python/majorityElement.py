from typing import List

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        dict = {}
        for num in nums:
            dict[num] = dict.get(num, 0) + 1
        result = max(dict, key=dict.get)
        return int(result)