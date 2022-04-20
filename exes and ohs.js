function XO(str) {
    return str = str.toLowerCase(), str.split('x').length === str.split('o').length;
}