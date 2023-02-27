var twoSum = function(numbers, target) {
    let [left, right] = [0, numbers.length - 1];

    while(left < right){
        let total = numbers[left] + numbers[right];

        const onTarget = total === target;
        if(onTarget) return [left + 1, right + 1];

        const greaterThan = total < target;
        if(greaterThan) left++;

        const lessThan = total > target;
        if(lessThan) right--;
    }
    return [-1, -1]
};
