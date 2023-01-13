/* ********

58. Length of last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring consisting of non-space characters only.
******** */

var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    console.log(arr)
    let answer = arr.pop();
    console.log(answer)
    return answer.length

};
