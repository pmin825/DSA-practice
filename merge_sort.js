

arr = [100, -40, 500]

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2); // 1
    let left = arr.slice(0, mid); // [100] // -40
    let right = arr.slice(mid); // [-40, 500] // 500
    console.log(left)
    // console.log(right)
    let leftSorted = mergeSort(left); // [100]
    let rightSorted = mergeSort(right);  // [-40, 500]
    return merge(leftSorted, rightSorted); // [ 500]
}
function merge(left, right) {
    let merged = []; // [-40, 100, 500]
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            merged.push(left.shift())
        }   else {
            merged.push(right.shift());
        }
    }
    return merged.concat(left, right)
}

mergeSort(arr)