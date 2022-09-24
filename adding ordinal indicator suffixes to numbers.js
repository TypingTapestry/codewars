function numberToOrdinal(n) {
    let suffix = '';
    switch (n % 10) {
        case 1:
          suffix = n % 100 === 11 ? 'th' : 'st';
          break;
        case 2:
          suffix = n % 100 === 12 ? 'th' : 'nd';
          break;
        case 3:
          suffix = n % 100 === 13 ? 'th' : 'rd';
          break;
        default: suffix = 'th';
    } return n === 0 ? '0' : n + suffix;
}