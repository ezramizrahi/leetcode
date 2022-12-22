from typing import bool

class Solution:
    def isValid(self, s: str) -> bool:
        expected_closing_brackets_stack = []
        if len(s) % 2 != 0:
            return False
        dict = {'(' : ')', '[' : ']', '{' : '}'}
        for char in s:
            if char in dict.keys():
                expected_closing_brackets_stack.append(char)
            else:
                if expected_closing_brackets_stack == []:
                    return False
                a = expected_closing_brackets_stack.pop()
                if char != dict[a]:
                    return False
        return expected_closing_brackets_stack == []