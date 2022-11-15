function tankvol(h, d, vt) {
    let theta = Math.acos(1 - 2 * h / d) * 2;
    return Math.floor(vt * (theta - Math.sin(theta)) / (Math.PI * 2));
}