function getMostProfitFromStockQuotes(quotes) {
    let sellStonks = -Number.POSITIVE_INFINITY;
    return quotes.reduceRight((acc, cur) => {
      if (sellStonks < cur) sellStonks = cur;
      return acc = acc + sellStonks - cur;
    }, 0);
}