function isValidWalk(walk) {
    let x = 0;
    let y = 0;
    let z = walk.length;
    for (let i = 0; i < walk.length; i++) {
      switch (walk[i]) {
          case 'n':
            y--;
            break;
          case 'e':
            x++;
            break;
          case 's':
            y++;
            break;
          case 'w':
            x--;
            break;
          default: 0;
      }
    } return x === 0 && y === 0 && z === 10;
}