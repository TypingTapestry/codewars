function missingAngle(h, a, o) {
    if (h === 0) return Math.round(Math.atan(o / a) * 180 / Math.PI);
    if (a === 0) return Math.round(Math.asin(o / h) * 180 / Math.PI);
    if (o === 0) return Math.round(Math.acos(a / h) * 180 / Math.PI);
}