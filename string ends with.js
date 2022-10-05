function solution(str, ending) {
    return str.substr(str.length - ending.length, str.length) === ending;
}