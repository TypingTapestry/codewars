function manhattanDistance(pointA, pointB) {
    let a = Math.abs(pointA[0] - pointB[0]);
    let b = Math.abs(pointA[1] - pointB[1]);
    return a + b;
}