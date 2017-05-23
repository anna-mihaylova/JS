const randomIntFromInterval = function(min, max) {
    return Math.floor((Math.random()) * (max - min + 1) + min);
}

const randomArray = function(length, minNumber, maxNumber) {
    let arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(randomIntFromInterval(minNumber, maxNumber));
    }

    return arr;
}
