//O(n) time O(1) space

function subarraySort(array) {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (outOfOrder(array, i, num)) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }
    }

    if (min === Infinity) return [-1, -1];

    let left = 0;
    let right = array.length - 1;

    while (array[left] <= min) {
        left++;
    }
    while (array[right] >= max) {
        right--;
    }
    return [left, right];
}

function outOfOrder(array, i, num) {
    if (i === 0) return num > array[i + 1];
    if (i === array.length - 1) return num < array[i - 1];
    return num < array[i - 1] || num > array[i + 1];
}

// function subarraySort(array) {
//     let sorted = array.slice().sort((a, b) => a - b);
//     let min = Infinity;
//     let result;
//     if (array.join("") === sorted.join("")) return [-1, -1];
//     for (let i = 0; i < array.length - 1; i++) {
//         let sub;
//         for (let j = i + 1; j < array.length; j++) {
//             sub = array.slice(i, j + 1).sort((a, b) => a - b);
//             if (
//                 array
//                     .slice(0, i)
//                     .concat(sub)
//                     .concat(array.slice(j + 1))
//                     .join("") === sorted.join("")
//             ) {
//                 if (sub.length < min) {
//                     min = sub.length;
//                     result = [i, j];
//                 }
//             }
//         }
//     }
//     if (!result) return [-1, -1];
//     return result;
// }
