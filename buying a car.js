function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let months = 0;
    while (startPriceNew > months * savingperMonth + startPriceOld) {
      months++;
      if (months % 2 === 0) percentLossByMonth += 0.5;
      startPriceOld *= (100 - percentLossByMonth) / 100;
      startPriceNew *= (100 - percentLossByMonth) / 100;
    } return [months, Math.round(months * savingperMonth + startPriceOld - startPriceNew)];
}