/*
Rotate array
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
*/

let rotate = function(numsa, k) {
    let final=numsa.splice(numsa.length-k);
    for (let i=0;i<final.length;i++){
        numsa.splice(i,0,final[i]);
    }
    return numsa;
};
