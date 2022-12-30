from typing import List
from typing import bool

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        dict = {}
        for num in nums:
            dict[num] = dict.get(num, 0) + 1
        for value in dict.values():
            if value > 1:
                return True
        return False