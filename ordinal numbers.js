function ordinal(number, brief) {
    switch (number % 10 | 0 + ((number % 100 / 10 | 0) === 1 ? 10 : 0)) {
        case 1:
          return 'st';
          break;
        case 2:
          return brief ? 'd' : 'nd';
          break;
        case 3:
          return brief ? 'd' : 'rd';
          break;
        default: return 'th';
    }
}