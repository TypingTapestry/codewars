let findMissing = function (list) {
    let length = list.length;
    let inc = (list[length - 1] - list[0]) / length;
    for (let i = 0; i < length; i++) if (list[i] + inc !== list[i + 1]) return list[i] + inc;
}