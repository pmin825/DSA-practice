function runLengthEncoding(string) {
    let final = "";
    let count = 1;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count += 1;
            if (count >= 10) {
                count = (count % 10) + 1;
                final += "9" + string[i];
            }
        } else {
            final += count.toString() + string[i];
            count = 1;
        }
    }
    return final;
}
