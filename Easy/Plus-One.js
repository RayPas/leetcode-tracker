/* ****************

66. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

**************** */

    // first join the digits with no space and add 1
    let str = digits.join("");
    let num = BigInt(str)+ BigInt(1);
    // convert the num into array
    num = num.toString().split('').map((num) => parseInt(num));
    return num;
