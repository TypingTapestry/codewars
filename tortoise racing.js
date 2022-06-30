function race(v1, v2, g) {
    if (v1 > v2) return null;
    let sec = Math.floor(g / (v2 - v1) * 3600);
    let h = Math.floor(sec / 3600);
    let m = Math.floor((sec - h * 3600) / 60);
    let s = sec - h * 3600 - m * 60;
    return [h, m, s];
}