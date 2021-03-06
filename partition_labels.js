const partitionLabels = (S) => {
    const partitions = [];
    const charLocations = {};

    for (let i = 0; i < S.length; i++) {
        const char = S[i];
        charLocations[char] = i;
    }

    let start = 0;
    let end = charLocations[S[0]];
    for (let i = 0; i < S.length; i++) {
        const char = S[i];
        if (i === end) {
            partitions.push(i - start + 1);
            start = i + 1;
            end = charLocations[S[i + 1]];
        } else {
            end = Math.max(end, charLocations[char]);
        }
    }
    return partitions;
};

// var partitionLabels = function (S) {
//     const hashMap = {};
//     for (let i = 0; i < S.length; i++) {
//         const char = S[i];
//         hashMap[char] = hashMap[char] ? [hashMap[char][0], i] : [i];
//     }
//     const orderIdx = Object.values(hashMap).sort((a, b) => a[0] - b[0]);
//     const idx = [];
//     let currIdx = 0;
//     for (const range of orderIdx) {
//         if (range[0] > currIdx) {
//             idx.push(range[0]);
//             currIdx = range[1] || range[0];
//         } else {
//             currIdx = Math.max(currIdx, range[1] || range[0]);
//         }
//     }
//     if (idx.length === 0) return [S.length];
//     const output = [idx[0]];
//     for (let i = 1; i < idx.length; i++) {
//         output.push(idx[i] - idx[i - 1]);
//     }
//     output.push(S.length - idx[idx.length - 1]);
//     return output;
// };
