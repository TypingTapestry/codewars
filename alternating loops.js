function combine() {
    let arr = [];
    let max = 0;
    for (let i = 0; i < arguments.length; i++) if (arguments[i].length > max) max = arguments[i].length;
    for (let i = 0; i < max; i++) for (let x = 0; x < arguments.length; x++) if (arguments[x][i] !== undefined) arr.push(arguments[x][i]);
    return arr;
}