const getMinBlows = (height) => {
    if (height.length < 3) return 1;

    const minHit = new Array(height.length);

    let hits = 0;
    let currHeight = 0;
    for (let i = 0; i < height.length; i++) {
        let building = height[i];
        if (!hits || building < currHeight) hits += 1;
        currHeight = building;
        minHit[i] = hits;
    }


    hits = 0;
    currHeight = 0;
    for (let i = height.length - 1; i >= 0; i--) {
        let building = height[i];
        if (!hits || building < currHeight) hits += 1;
        currHeight = building;
        minHit[i] += hits;
        console.log(minHit);

    }
    return Math.min(...minHit);
};


console.log(getMinBlows([1,2,3,4,3,2,1]));
