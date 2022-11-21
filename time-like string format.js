function solution(hour) {
    let str = hour + '';
    if (str.length < 3 || str.length > 4) throw new Error();
    return str.slice(0, -2) + ':' + str.slice(-2);
}