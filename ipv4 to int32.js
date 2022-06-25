function ipToInt32(ip) {
    return ip.split('.').reduce((acc, cur) => acc * 256 + Number(cur), 0);
}