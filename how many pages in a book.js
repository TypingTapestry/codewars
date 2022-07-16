function amountOfPages(summary) {
    let n = 0;
    for (var i = 1; n < summary; i++) n += i.toString().length;
    return i - 1;
}