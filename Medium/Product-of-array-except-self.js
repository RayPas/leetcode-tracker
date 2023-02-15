var productExceptSelf = function(nums) {
    let ans = [];
    let prefix = 1;
    let postfix = 1;

    for(let i = 0; i < nums.length; i++) {
        ans[i] = prefix;
        prefix *= nums[i];
        // console.log(ans, prefix);
    }

    for(let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        // console.log(ans, postfix, i, "prepost stuff");
        ans[i] *= postfix;
        // console.log(ans, postfix, "post stuff");
    }

    return ans;
};
