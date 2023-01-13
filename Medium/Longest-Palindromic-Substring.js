/* **************
5. Longest Palindromic Substring

Given a string s, return the longest 
palindromic
 
substring
 in s.


************** */

const longestPalindrome = (s) => {
  // Edge Cases

  //Empty string
  if (!s) return "";
  //If there is only one char in the string
  if (s.length === 1) return s;

  // Create a starting variable

  let str = "";

  // iterate through the string with two pointers
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = left + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > str.length) {
        str = s.slice(left + 1, right);
      }
    }
  }

  return str;
};
