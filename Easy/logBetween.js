/*
LogBetween

Define a function logBetween(lowNum, highNum)
that will return an array from lowNum to highNum, inclusive.
Inclusive means that the range includes lowNum and highNum.

*/

const logBetween = (lowNum, highNum) => {
    let answer = [];;
    for(let i = lowNum; i <= highNum; i++){
        answer.push(i);
    }
    return answer;
}

// Test Cases

console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]
