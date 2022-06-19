function goodVsEvil(good, evil) {
    good = good.split(' ').reduce((acc, cur, i) => {
      switch (i) {
          case 0:
            return acc + cur++;
            break;
          case 1:
            return acc + cur++ * 2;
            break;
          case 2:
            return acc + cur++ * 3;
            break;
          case 3:
            return acc + cur++ * 3;
            break;
          case 4:
            return acc + cur++ * 4;
            break;
          case 5:
            return acc + cur++ * 10;
            break;
          default: 0;
      }
    }, 0);
    
    evil = evil.split(' ').reduce((acc, cur, i) => {
      switch (i) {
          case 0:
            return acc + cur++;
            break;
          case 1:
            return acc + cur++ * 2;
            break;
          case 2:
            return acc + cur++ * 2;
            break;
          case 3:
            return acc + cur++ * 2;
            break;
          case 4:
            return acc + cur++ * 3;
            break;
          case 5:
            return acc + cur++ * 5;
            break;
          case 6:
            return acc + cur++ * 10;
            break;
          default: 0;
      }
    }, 0);
    
    if (good > evil) return 'Battle Result: Good triumphs over Evil';
    else if (evil > good) return 'Battle Result: Evil eradicates all trace of Good';
    else return 'Battle Result: No victor on this battle field';
}