// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// DS: STACK

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    // Initialise an array to store the closing brackets expected
    let expectedClosingBrackets = [];

    // Loop through the letters in the input string
    for (let letter = 0; letter < s.length; letter++) {
        switch (s[letter]) {
            // Push the closing equivelant of any open brackets found
            case '{': {
                expectedClosingBrackets.push('}');
                break;
            }
            case '[': {
                expectedClosingBrackets.push(']');
                break;
            }
            case '(': {
                expectedClosingBrackets.push(')');
                break;
            }
            // If a close bracket is found, check that it matches the last stored open bracket
            default: {
                if (expectedClosingBrackets.pop() !== s[letter]) {
                    return false;
                }
            }
        }
    }

    // Return based on whether or not anything remains
    // (indicates that there were incorrect brackets)
    return !expectedBrackets.length;
};