/**
 - Go through the array
 - See if any value comes up more than once
 - Return True if so False if every number is unique

 ----------

 - Two solutions
1. Brute Force - Two pointer
    - first pointer [i]
    - second pointer [j]
    - Iterate through the array and if any of the values match then just return true
2. Create a map
    - Create a map
    - Go through the array and if the value hasnt been seen before add it to the map,
    - if the value has been seen return true
    - if we are at the end of the array and no value has been repeated return false
  */
    var containsDuplicate = function(nums) {
        //Edge Cases
        if(nums.length <= 1) return false;

        //Create a map
        let map = {};

        //Loop through the nums array
        for (let i = 0; i < nums.length; i++){
            //Check to see if the value is in the map
            if(!map[nums[i]]) {
                map[nums[i]] = 1;
                // console.log(map)
            //If the value is in the map return true
            } else {
                return true;
            }
        }
        //If all values are unique return false
        return false;
    };
