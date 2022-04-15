function past(h, m, s) {
    let hrs = h * 60 * 60 * 1000;
    let mins = m * 60 * 1000;
    let secs = s * 1000;
    return hrs + mins + secs;
}