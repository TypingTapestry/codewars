function nbYear(p0, percent, aug, p) {
    for (var yrs = 0; p0 < p; yrs++) {
      p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    } return yrs;
}