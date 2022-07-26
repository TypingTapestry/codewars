function blackOrWhiteKey(keyPressCount) {
    keyPressCount = keyPressCount % 88;
    if (keyPressCount === 0) return 'white';
    keyPressCount = keyPressCount % 12;
    switch (keyPressCount) {
        case 1:
          return 'white';
          break;
        case 3:
          return 'white';
          break;
        case 4:
          return 'white';
          break;
        case 6:
          return 'white';
          break;
        case 8:
          return 'white';
          break;
        case 9:
          return 'white';
          break;
        case 11:
          return 'white';
          break;
        default: return 'black';
    }
}