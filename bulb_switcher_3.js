var numTimesAllBlue = function (light) {
    const status = new Array(light.length + 1).fill(false);
    status[0] = true;
    let lastTurnedOn;
    let momentsTurnedOn = 0;

    for (let i = 0; i < light.length; i++) {
        let bulb = light[i];
        status[bulb] = true;
        if (bulb > lastTurnedOn || !lastTurnedOn) lastTurnedOn = bulb;
        for (let j = 1; j <= lastTurnedOn; j++) {
            if (status[j] === false) {
                break;
            }
            if (j === lastTurnedOn) momentsTurnedOn++;
        }
    }
    return momentsTurnedOn;
};


//alternate solution
//O(n) time O(1) space
var numTimesAllBlue = function(light) {
    let moments = 0;
    let total = 0;
    let target = 0;
    for (let i = 0; i < light.length; i++) {
        total += light[i]
        target += i + 1
        
        if (total === target) moments++
    }
    return moments;
};