function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);

    if (redShirtHeights[0] > blueShirtHeights[0]) {
        for (let i = 0; i < redShirtHeights.length; i++) {
            let redNum = redShirtHeights[i];

            if (redNum <= blueShirtHeights[i]) return false;
        }
        return true;
    } else if (blueShirtHeights[0] > redShirtHeights[0]) {
        for (let i = 0; i < blueShirtHeights.length; i++) {
            let blueNum = blueShirtHeights[i];

            if (blueNum <= redShirtHeights[i]) return false;
        }
        return true;
    } else {
        return false;
    }
}
