function productSum(array, mult = 1) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];

        if (ele instanceof Array) {
            total += productSum(ele, mult + 1);
        } else {
            total += ele;
        }
    }
    return total * mult;
}
