let nbrOfLaps = function (x, y) {
    for (i = 1; i * x % y > 0; i++) {null};
    return [i, i * x / y];
}