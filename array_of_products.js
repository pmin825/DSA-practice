// function arrayOfProducts(array) {
//     const results = [];
//     for (let i = 0; i < array.length; i++) {
//         let product = 1;
//         for (let j = 0; j < array.length; j++) {
//             if (j === i) continue;
//             product *= array[j];
//         }
//         results.push(product);
//     }
//     return results;
// }

// O(n) time O(n) space
function arrayOfProducts(array) {
    let results = new Array(array.length).fill(1);

    let leftProd = 1;
    for (let i = 0; i < array.length; i++) {
        results[i] = leftProd;
        leftProd *= array[i];
    }
    let rightProd = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        results[i] *= rightProd;
        rightProd *= array[i];
    }
    return results;
}
