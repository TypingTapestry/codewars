function runningPace(distance, time) {
    let arr = time.split(':');
    let sec = arr[0] * 60 + parseInt(arr[1]);
    let minutes = Math.floor(Math.floor(sec / distance) / 60);
    let second = Math.ceil(parseInt(Math.floor(sec / distance) / 60 % 1 * 100) / 10 * 6);
    if (second.toString().length === 1) second = '0' + second;
    return minutes + ':' + second;
}