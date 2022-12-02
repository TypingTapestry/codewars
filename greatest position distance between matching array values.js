let greatestDistance = data => {
    let res = 0;
    for (let i = 0; i < data.length - 1; i++) for (let x = i + 1; x < data.length; x++) if (data[i] === data[x] && res < x - i) res = x - i;
    return res;
}