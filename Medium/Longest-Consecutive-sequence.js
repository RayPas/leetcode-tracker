
var longestConsecutive = function(nums) {
// init the set;
    const set = new Set(nums)
		// Init the counter for the higest value
    let maxScore = 0

		// Iterate through the set
    for(const num of [...set]){
				// Check to see if the number before the curr number exists;
        const prevNum = num - 1;

				// If the value does exist continue in the loop.
        if(set.has(prevNum)) continue;


				// Init Current number and the current score;
        let [ currNum, score ] = [ num , 1 ];

				// Set a function that will check if the next value is in the set;
        const cont = () => set.has(currNum + 1);

				// While the value passed the current value exists add to the currnum, and increase the score;
        while (cont()) {
            currNum++;
            score++;
        }
				// after that loop is finished then set maxScore to the value that's bigger whether it be maxScore or score
        maxScore = Math.max(maxScore, score)
    }
    return maxScore;
};

