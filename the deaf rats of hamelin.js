let countDeafRats = function (town) {
    let deaf = 0;
    let idx = 'O';
    for (let i = 0; i < town.length; i++) {
      if (town[i] === idx) deaf++;
      if (town[i] === 'P') idx = '~';
      if (town[i] === 'O' || town[i] === '~') i++;
    } return deaf;
}