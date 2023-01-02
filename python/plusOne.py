from typing import List

# You are given a large integer represented as an integer array digits,
# where each digits[i] is the ith digit of the integer.
# The digits are ordered from most significant to least significant in left-to-right order.
# The large integer does not contain any leading 0's.

# Increment the large integer by one and return the resulting array of digits.

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        string = ''.join([str(d) for d in digits])
        integer = int(string) + 1
        new_string = str(integer)
        solution = list(map(int, new_string))
        return solution