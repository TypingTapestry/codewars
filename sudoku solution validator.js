function validSolution(board) {
    let row = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let col = new Array(9).fill(0).map(() => new Array(9).fill(0));
    let box = new Array(9).fill(0).map(() => new Array(9).fill(0));
    for (let i = 0; i < 9; i++) for (let x = 0; x < 9; x++) {
        let num = board[i][x];
        if (num === 0) return false;
        let idx = Math.floor(i / 3) * 3 + Math.floor(x / 3);
        if (row[i][num - 1] || col[x][num - 1] || box[idx][num - 1]) return false;
        row[i][num - 1] = col[x][num - 1] = box[idx][num - 1] = 1;
      } return true;
}