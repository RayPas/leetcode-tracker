// Sort the array
 // Loop the a pointer
 // in that loop use the method from Two Sum II
 // Store the values and call it a day
 var threeSum = function(nums) {
    nums.sort((a, b) => a -b);
    let answer = [];

    for(let i = 0; i < nums.length; i++){
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;
        let sum = nums[i] + nums[left] + nums[right];

        while (left < right){
            let sum = nums[i] + nums[left] + nums[right];

            if(sum > 0) {
                right--;
            } else if (sum < 0){
                left++;
            } else {
                answer.push([nums[i], nums[left], nums[right]])
                right--;
                left++;
                while(nums[left] === nums[left - 1] && left < right){
                    left++;
                }
            }
        }
    }
    return answer;
};
