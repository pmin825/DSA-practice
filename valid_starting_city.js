function validStartingCity(distances, fuel, mpg) {
    let count = distances.length;

    for (let i = 0; i < count; i++) {
        let currentFuel = 0;

        for (let j = i; j < i + count; j++) {
            if (currentFuel < 0) continue;

            const idx = j % distances.length;
            const fuelFromCity = fuel[idx];
            const distanceToNextCity = distances[idx];
            currentFuel += fuelFromCity * mpg - distanceToNextCity;
        }
        if (currentFuel >= 0) return i;
    }
    return -1;
}
