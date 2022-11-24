let mirror = obj => {
    let res = {};
    for (let key in obj) res[key] = key.split('').reverse().join('');
    return res;
}