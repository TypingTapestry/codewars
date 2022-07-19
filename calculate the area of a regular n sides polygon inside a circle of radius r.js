function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    return Math.round(numberOfSides * circleRadius ** 2 * Math.sin(Math.PI * 2 / numberOfSides) / 2);
}