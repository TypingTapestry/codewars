function longestSlideDown(pyramid) {
    for (let i = pyramid.length - 2; i >= 0; i--) for (let x = 0; x < pyramid[i].length; x++) pyramid[i][x] += Math.max(pyramid[i + 1][x], pyramid[i + 1][x + 1]);
    return pyramid[0][0];
}