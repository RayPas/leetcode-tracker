/* ***************

9. Palindrome Number

Given an integer x, return true if x is a
palindrome
, and false otherwise.

************** */

var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('');

    if (reversed == x){
        return true;
    }
    return false;
};
