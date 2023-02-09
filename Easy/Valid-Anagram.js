 /**
 Can only see one solution, and that is to map and iterate through the other string.
  */
 var isAnagram = function(s, t) {
    // Edge Cases
    if(s.length !== t.length){
        return false;
    }

    // Create map
    let map = {};
    //Put all of the first string into a map
    for(let i = 0; i < s.length; i++){
        if(!map[s[i]]){
            map[s[i]] = 1;
        } else {
            map[s[i]] += 1;
        }
    }

    // Iterate through the string and compare it to the map.
    for(let i =0; i < t.length; i++){
        // Check to see if the character is in the map first
        if(!map[t[i]]){
            return false;

        // If it is in the map decrease the value
        } else if(map[t[i]] !== 0){
            map[t[i]] -= 1
        } else return false;
    }
    return true
};
