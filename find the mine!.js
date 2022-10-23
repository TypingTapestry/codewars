function mineLocation(field) {
    for (let i = 0; i < field.length; i++) for (let x = 0; x < field[i].length; x++) if (field[i][x] === 1) return [i, x];
}