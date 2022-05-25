function score(dice) {
    let sum = 0;
    var dice = dice.sort();
    for (let i = 0; i < dice.length; i++) {
      if (dice[i] === dice[i + 1] && dice[i + 1] === dice[i + 2]) {
        switch (dice[i]) {
            case 1:
              sum += 1000;
              break;
            case 2:
              sum += 200;
              break;
            case 3:
              sum += 300;
              break;
            case 4:
              sum += 400;
              break;
            case 5:
              sum += 500;
              break;
            case 6:
              sum += 600;
              break;
            default: 0;
        } i = i + 2;
          continue;
      } else if (dice[i] === 1) sum += 100;
        else if (dice[i] === 5) sum += 50;
    } return sum;
}