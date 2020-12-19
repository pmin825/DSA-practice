// arr = [0, 1, 0 , 1]

// given an array of binary digits 0 and 1, sort the array so that all zeros are at one end and all ones are at the other. Which end does not matter. To sort the array, swap any two adjacent elements. Determine the min number of swaps to sort the array

function minMoves(arr) {
    let countOfOnes = 0;
    let countOfZeros = 0;
    let swapOnes = 0;
    let swapZeros = 0;


    for (const num of arr) {
        if (num === 0) {
            countOfOnes += 1;
            swapZeros += countOfZeros
        }   else {
            countOfZeros += 1;
            swapOnes += countOfOnes;
        }
    }
    return Math.min(swapZeros, swapOnes);
}