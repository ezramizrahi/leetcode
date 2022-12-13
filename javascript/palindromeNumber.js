// Given an integer x, return true if x is a 
// palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let xToString = x.toString();
    let xToStringReversed = x.toString().split('').reverse().join('');
    if (xToString === xToStringReversed) {
        return true;
    } else {
        return false;
    };
};