function maxBall(v0) {
    v0 *= 1000 / 3600;
    let grav = 9.81;
    return Math.round(v0 / grav * 10);
}