function firstDuplicateValue(array) {
    for (const num of array) {
        if (array[Math.abs(num) - 1] < 0) return Math.abs(num);
        array[Math.abs(num) - 1] *= -1;
    }
    return -1;
}
