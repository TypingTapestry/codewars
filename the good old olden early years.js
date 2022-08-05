function getGoodOldDay(input) {
    let date = input.split('-');
    date = new Date(date[2], date[1] - 1, date[0]);
    switch (date.getDay()) {
        case 0:
          return 'Saturday';
          break;
        case 1:
          return 'Sunday';
          break;
        case 2:
          return 'Monday';
          break;
        case 3:
          return 'Tuesday';
          break;
        case 4:
          return 'Wednesday';
          break;
        case 5:
          return 'Thursday';
          break;
        case 6:
          return 'Friday';
          break;
        default: 0;
    }
}