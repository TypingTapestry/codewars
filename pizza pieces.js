function maxPizza(cuts) {
    let sum = 1;
    if (cuts < 0) return -1;
    if (cuts === 0) return 1;
    while (cuts > 0) {
      sum += cuts;
      cuts--;
    } return sum;
}