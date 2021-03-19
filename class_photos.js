function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);

    for (let i = 0; i < redShirtHeights.length; i++) {
        if (redShirtHeights[i] === blueShirtHeights[i]) return false;
        if (redShirtHeights[0] > blueShirtHeights[0]) {
            if (redShirtHeights[i] <= blueShirtHeights[i]) return false;
        } else {
            if (blueShirtHeights[i] <= redShirtHeights[i]) return false;
        }
    }
    return true;
}

