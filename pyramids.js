
function pyramid(n) {
    let left = n - 1;
    let right = n - 1;
    let pound = 1;
    
    while (left >= 0) {
        console.log(' '.repeat(left) + '#'.repeat(pound) + ' '.repeat(right))
        pound += 2;
        left--
        right--
    }
}