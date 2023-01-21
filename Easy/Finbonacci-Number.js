/*

509. Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

*/

var fib = function(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;

    // let next = 1;
    // let prev = 0;
    // let answer = 0;

    // for(let i = n; i > 1; i--){
    //     answer = next + prev;
    //     prev = next;
    //     next = answer;
    // }
    return fib(n - 1) + fib(n - 2);
    // return answer;
}

// start of fib is  1, 1, 2, 3, 5, 8
// 2 == 1
// 3 == 2
// 4 == 3

// 3

// create two values, add together the ammount of time requested in n
