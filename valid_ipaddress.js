function validIPAddresses(string) {
    const results = [];

    for (let i = 0; i < 3; i++) {
        let num1 = string.slice(0, i + 1);
        if (parseInt(num1) > 255 || !numChecker(num1)) continue;
        for (let j = i + 1; j < i + 4; j++) {
            let num2 = string.slice(i + 1, j + 1);
            console.log(num2);
            if (parseInt(num2) > 255 || !numChecker(num2)) continue;
            for (let k = j + 1; k < j + 4; k++) {
                let num3 = string.slice(j + 1, k + 1);
                if (parseInt(num3) > 255 || !numChecker(num3)) continue;
                let num4 = string.slice(k + 1);
                if (parseInt(num4) > 255 || !numChecker(num4)) continue;
                results.push(num1 + "." + num2 + "." + num3 + "." + num4);
            }
        }
    }
    return results;
}

function numChecker(string) {
    if (parseInt(string).toString().length === string.length) return true;
    return false;
}
