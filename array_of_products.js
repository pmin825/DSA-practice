function arrayOfProducts(array) {
    let product = 1;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        result[i] = product;
        product *= num;
    }
    product = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        let num = array[i];
        result[i] *= product;
        product *= num;
    }
    return result;
}
