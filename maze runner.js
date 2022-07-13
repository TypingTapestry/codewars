function mazeRunner(maze, directions) {
    let arr = maze.map(el => el.indexOf(2));
    let x = arr.findIndex(arr => arr !== -1);
    let y = arr[x];
    arr = directions.map(i => {
      switch (i) {
          case 'N':
            x--;
            break;
          case 'E':
            y++;
            break;
          case 'S':
            x++;
            break;
          case 'W':
            y--;
            break;
          default: 0;
      }
      if (x > maze.length - 1 || y > maze[0].length - 1 || x < 0 || y < 0 || maze[x][y] === 1) return 'Dead';
      if (maze[x][y] === 3) return 'Finish';
    });
    return arr[arr.findIndex(el => el !== undefined)] || 'Lost';
}