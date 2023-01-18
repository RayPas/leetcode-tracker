/* *********

724. Find Pivot Index

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

**********/

const pivotIndex = (nums) => {
	// We have not started our program yet, so values are at 0
    let rightSum = 0;
    let leftSum = 0;

	// Calculate the sum of the entire array
    // O(n)
    nums.forEach((v) => (rightSum += v));

    // O(n)
    for (var i = 0; i <= nums.length - 1; i++) {
        let curr = nums[i];

		// The right sum no longer contains the curr number
        rightSum -= curr;

		// if left sum equals right sum, we return index
        if (leftSum === rightSum) return i;

		// We did not find a match
		// Left sum now contains our curr number
        leftSum += curr;
    }

    return -1;
};
