const reverseBits = (n) => {
    const numString = n.toString(2).padStart(32, "0");
    let reversed = "";

    for (let i = numString.length - 1; i >= 0; i--) {
        reversed += numString[i];
    }

    return parseInt(reversed, 2);
};
