function closestNumbers(numbers) {
    let min = Infinity;
    numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length - 1; i++) {
        const result = Math.abs(numbers[i + 1] - numbers[i]);
        min = Math.min(min, result);
    }

    for (let i = 0; i < numbers.length - 1; i++) {
        const result = Math.abs(numbers[i + 1] - numbers[i]);
        if (result === min) console.log(numbers[i], numbers[i + 1]);
    }
}
