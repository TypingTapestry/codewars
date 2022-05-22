function humanReadable(seconds) {
    let hr = '0' + Math.floor(seconds / 3600);
    seconds -= hr * 3600;
    let min = '0' + Math.floor(seconds / 60);
    seconds -= min * 60;
    let sec = '0' + seconds;
    return hr.slice(-2) + ':' + min.slice(-2) + ':' + sec.slice(-2);
}