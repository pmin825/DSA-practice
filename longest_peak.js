function longestPeak(array) {
    let longest = 0;
    let i = 1;
    while (i < array.length) {
        let peak = array[i - 1] < array[i] && array[i] > array[i + 1];
        if (!peak) {
            i++;
            continue;
        }
        let left = i - 1;
        let right = i + 1;

        while (left - 1 >= 0 && array[left - 1] < array[left]) {
            left--;
        }
        while (right + 1 < array.length && array[right + 1] < array[right]) {
            right++;
        }
        longest = Math.max(longest, right - left + 1);
        i = right + 1;
    }
    return longest;
}
