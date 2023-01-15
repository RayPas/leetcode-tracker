/*
1480. Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

*/

var runningSum = function(nums) {

    let currentSum = nums[0];
    let sumNums = [];
    sumNums.push(currentSum);

    for (let i = 1; i < nums.length; i++) {
        currentSum += nums[i];
        sumNums.push(currentSum);
    }

    return sumNums;

};
