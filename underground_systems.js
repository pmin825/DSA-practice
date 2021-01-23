
var UndergroundSystem = function() {
    this.checkIns = {};
    this.trips = {};
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIns[id] = {
        startStation: stationName,
        startTime: t
    };
    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let trip = this.checkIns[id].startStation + ' ADD ' + stationName
    if (this.trips[trip]) {
        this.trips[trip].push(t - this.checkIns[id].startTime)
    }   else {
        this.trips[trip] = [t - this.checkIns[id].startTime];
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let trip = startStation + ' ADD ' + endStation;
    let sum = 0;

    for (let i = 0; i < this.trips[trip].length; i++) {
        sum += this.trips[trip][i];
    }
    return sum / this.trips[trip].length;
};