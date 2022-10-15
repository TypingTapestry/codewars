function minutesToMidnight(d) {
    let hrs = 24 - d.getHours();
    let min = 60 * hrs - d.getMinutes();
    return min > 1 ? d.getSeconds() > 30 ? min - 1 + ' minutes' : min + ' minutes' : min + ' minute';
}