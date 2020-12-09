// O(nlog(n)) time | O(1) space 

function smallestDifference(arrayOne, arrayTwo) {
    let idxOne = 0;
    let idxTwo = 0;
    let smallest = Infinity;
    let final;
    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let numOne = arrayOne[idxOne];
        let numTwo = arrayTwo[idxTwo];
        let current = Math.abs(numOne - numTwo)
        idxTwo++
        if (current < smallest) {
            smallest = current;
            final = [numOne, numTwo]
        }
        if (idxTwo === arrayTwo.length) {
            idxTwo = 0
            idxOne++
        }
    }
    return final
}
// Do not edit the line below.
exports.smallestDifference = smallestDifference;

