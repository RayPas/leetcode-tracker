/**
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/


var longestCommonPrefix = function(strs) {

    if(!strs.length) return '';


    //iterate through the first string in the array
    for(let i = 0; i < strs[0].length; i++) {
        // Check if the character is in the same position in every string
        if(!strs.every((string) => string[i] === strs[0][i])){
            //If not return the string up to and previous character
            return strs[0].slice(0,i)
        }
    }
    return strs[0];
};
