function hamming(a, b) {
    let str = 0;
    for (let i = 0; i < a.length; i++) if (a.charAt(i) !== b.charAt(i)) str++;
    return str;
}