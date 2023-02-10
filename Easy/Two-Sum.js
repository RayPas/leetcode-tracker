/*
1. Two Sum


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

const twoSum = function (nums, target) {
  //Solving with a for loop

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  // Map solve

  // let map = {};

  // for(let i = 0; i < nums.length; i++){
  //     let answer = target - nums[i];

  //     if(map[answer] != null){
  //         return [map[answer], i];
  //     } else {
  //         map[nums[i]] = i;
  //     }
  // }
};

/**
 * Hash map solve
 *
 * 
 // Hash map practice variation
const twoSum = function(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];

        if(map.has(diff)) return [map.get(diff), i];

        map.set(nums[i], i)
    }
}
 */
