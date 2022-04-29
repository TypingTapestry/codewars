function isPangram(string) {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every((str) => string.toLowerCase().includes(str));
}