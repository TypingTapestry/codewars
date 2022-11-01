function handAngle(date) {
    let min = (date.getMinutes() % 60) / 60;
    let hrs = (date.getHours() % 12 + min) / 12;
    let idx = Math.abs(hrs - min);
    idx = idx > 0.5 ? 1 - idx : idx;
    return 2 * Math.PI * idx;
}