function vowelBack(s) {
    let arr = 'abcdefghijklmnopqrstuvwxyz';
    let modded = 'vkbaafpqistuvwnyzabtpvfghi';
    let res = '';
    for (let i = 0; i < s.length; i++) res += modded[arr.indexOf(s[i])];
    return res;
}