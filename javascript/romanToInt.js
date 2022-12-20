// Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let letters = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let result = 0;
    for (i = 0; i < s.length; i++){
        const current = letters[s[i]];
        const next = letters[s[i+1]];
        if (current < next){
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
};