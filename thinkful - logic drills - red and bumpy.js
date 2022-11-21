function colorProbability(color, texture) {
    let num = 0;
    if (texture === 'smooth') num = 1 / 3;
    if (texture === 'bumpy' && color === 'red') num = 4 / 7;
    if (texture === 'bumpy' && color === 'yellow') num = 2 / 7;
    if (texture === 'bumpy' && color === 'green') num = 1 / 7;
    return String(num).slice(0, 4);
}