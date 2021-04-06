var asteroidCollision = function (asteroids) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < asteroids.length; i++) {
            if (asteroids[i] >= 0 && asteroids[i + 1] < 0) {
                if (asteroids[i] < Math.abs(asteroids[i + 1])) {
                    asteroids.splice(i, 1);
                    sorted = false;
                    i--;
                } else if (asteroids[i] === Math.abs(asteroids[i + 1])) {
                    asteroids.splice(i, 2);
                    sorted = false;
                } else {
                    asteroids.splice(i + 1, 1);
                    sorted = false;
                }
            }
        }
    }

    return asteroids;
};
