function WhatIsTheTime(timeInMirror) {
    let [hh, mm] = timeInMirror.split(':');
    let [hrs, min] = [12 - hh - 1, 60 - mm];
    if (min === 60) {
      min = 0;
      hrs++;
    }
    if (hrs <= 0) hrs = 12 + hrs;
    return `${hrs < 10 ? '0' + hrs: hrs}:${min < 10 ? '0' + min: min}`;
}