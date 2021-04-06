function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);

    let totalSpeed = 0;

    if (fastest === true) {
        for (let i = 0; i < redShirtSpeeds.length; i++) {
            totalSpeed += Math.max(
                redShirtSpeeds[i],
                blueShirtSpeeds[blueShirtSpeeds.length - 1 - i]
            );
        }
    } else {
        for (let i = 0; i < redShirtSpeeds.length; i++) {
            totalSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
        }
    }
    return totalSpeed;
}
