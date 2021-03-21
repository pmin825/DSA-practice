function arrayOfProducts(array) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
        let product = 1;
        for (let j = 0; j < array.length; j++) {
            if (j === i) continue;
            product *= array[j];
        }
        results.push(product);
    }
    return results;
}
