function lastDayIsFriday(initialYear, endYear) {
    let total = 0;
    if (!endYear) endYear = initialYear;
    for (let i = initialYear; i <= endYear; i++) for (let x = 1; x <= 12; x++) {
      let date = new Date(i, x, 0);
      if (date.getDay() === 5) total++;
    } return total;
}