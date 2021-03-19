function hasSingleCycle(array) {
    let visited = 0;
    let i = 0;
    while (visited < array.length) {
        if (visited > 0 && i === 0) return false;
        i = (i + array[i]) % array.length;
        if (i < 0) i += array.length;
        visited++;
    }
    return i === 0;
}
