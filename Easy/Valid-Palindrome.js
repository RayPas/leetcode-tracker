const isPalindrome = (s) => {
    if(!s.length) return true;

    // int pointers
    let [left, right] = [0, s.length - 1];
    let leftChar, rightChar;

    while(left < right){
        let leftChar = s[left];
        let rightChar = s[right];

        if(!/[a-zA-Z0-9]/.test(leftChar)) left++
        else if(!/[a-zA-Z0-9]/.test(rightChar)) right--
        else{
            if(leftChar.toLowerCase() != rightChar.toLowerCase()){
                return false;
            }
            left++
            right--
        }
    }
    return true;
}
