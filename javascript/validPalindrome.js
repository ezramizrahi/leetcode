// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    if ( s === ' ' ) return true;
    let removedNonAlphaNumericChars = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let reversed = removedNonAlphaNumericChars.split('').reverse().join('').toLowerCase();
    if ( removedNonAlphaNumericChars === reversed ) {
        return true;
    } else {
        return false;
    }
};