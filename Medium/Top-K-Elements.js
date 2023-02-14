 // I'll have an array of only integers
 // I'm not sure that there are any negative elements
 // I'll be given an integer that signifies how many and elements to return
 // return the elements that show up the most

 // Init a map
 // store values as keys
 // the value is increment as we see them in the array
 // We look for the highest value in the map and return the key into an array
 // remove that key:val from map. and iterate k'th times

 var topKFrequent = function(nums, k) {
    // Init map
    let map = {};

    // Iterate
    for(let i = 0; i < nums.length; i++){
        // Store information into the map
        if(!map[nums[i]]) map[nums[i]] = 1;
        else map[nums[i]] += 1;
    }
    // Sort the elements from highest to lowest
    let result = Object.keys(map).map(key => [Number(key), map[key]])
    console.log(result);
    let sortedResult = result.sort((a,b) => b[1] - a[1]);
    console.log(sortedResult);

    let answer = [];
    for(let i = 0; i < k; i++){
        answer.push(sortedResult[i][0]);
    }
    return answer;
};
