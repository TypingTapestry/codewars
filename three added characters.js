function addedChar(s1, s2) {
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join('');
    for (let i = 0; i < s2.length; i++) if (s1[i] !== s2[i]) return s2[i];
}