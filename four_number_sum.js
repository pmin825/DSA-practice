function fourNumberSum(array, targetSum) {
    const quads = [];
    for (let i = 0; i < array.length - 3; i++) {
        for (let j = i + 1; j < array.length - 2; j++) {
            for (let k = j + 1; k < array.length - 1; k++) {
                for (let l = k + 1; l < array.length; l++) {
                    if (
                        array[i] + array[j] + array[k] + array[l] ===
                        targetSum
                    ) {
                        quads.push([array[i], array[j], array[k], array[l]]);
                    }
                }
            }
        }
    }
    return quads;
}
