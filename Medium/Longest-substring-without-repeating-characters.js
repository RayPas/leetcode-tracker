/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest
substring
without repeating characters.
*/

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
  let currentLength = 0;
  let charMap = {};
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]] >= start) {
      start = charMap[s[i]] + 1;
      currentLength = i - start + 1;
    } else {
      currentLength++;
    }
    charMap[s[i]] = i;
    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
}
