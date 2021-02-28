function threeNumberSort(array, order) {
    const first = order[0];
    const second = order[1];

    let firstIdx = 0;
    let secondIdx = 0;
    let thirdIdx = array.length - 1;

    while (secondIdx <= thirdIdx) {
        if (array[secondIdx] === first) {
            let temp = array[secondIdx];
            array[secondIdx] = array[firstIdx];
            array[firstIdx] = temp;
            firstIdx++;
            secondIdx++;
        } else if (array[secondIdx] === second) {
            secondIdx++;
        } else {
            let temp = array[thirdIdx];
            array[thirdIdx] = array[secondIdx];
            array[secondIdx] = temp;
            thirdIdx--;
        }
    }
    return array;
}
