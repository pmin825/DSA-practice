function sameBsts(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    if (arrayOne[0] !== arrayTwo[0]) return false;
    if (!arrayOne.length & !arrayTwo.length) return true;
    const leftOne = getSmaller(arrayOne);
    const leftTwo = getSmaller(arrayTwo);
    const rightOne = getBiggerOrEqual(arrayOne);
    const rightTwo = getBiggerOrEqual(arrayTwo);

    return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmaller(array) {
    const smaller = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[0]) smaller.push(array[i]);
    }
    return smaller;
}

function getBiggerOrEqual(array) {
    const biggerOrEqual = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= array[0]) biggerOrEqual.push(array[i]);
    }
    return biggerOrEqual;
}
