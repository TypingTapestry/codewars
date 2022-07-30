function f(s) {
    for (let i = 1; i <= s.length; i++) if (s.substring(0, i).repeat(s.length / i) === s) return [s.substring(0, i), s.length / i];
    return [s, 1];
}