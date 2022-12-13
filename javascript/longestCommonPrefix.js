// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let shortestWord = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
    
    for (let str of strs) {
      while (str.slice(0, shortestWord.length) != shortestWord) {
        shortestWord = shortestWord.slice(0, -1); 
      }
    }
    return shortestWord;
};