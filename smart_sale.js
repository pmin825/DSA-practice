function deleteProducts(ids, m) {
    const count = {};
    let total = 0;
    let size = 0;
    for (const id of ids) {
        if (!count[id]) {
            count[id] = 1;
            size += 1;
        } else {
            count[id] += 1;
        }
    }

    let sortedCount = Object.entries(count).sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < sortedCount.length; i++) {
        if (sortedCount[i][1] <= m) {
            m -= sortedCount[i][1];
            total += 1;
        } else {
            return size - total;
        }
    }
    return size - total;
}
