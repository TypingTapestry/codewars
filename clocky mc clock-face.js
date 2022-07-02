let whatTimeIsIt = function (angle) {
    let hr = Math.floor(angle / 30);
    let min = Math.floor(angle % 30 * 2);
    if (hr <= 0) hr = 12;
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    return hr + ':' + min;
}