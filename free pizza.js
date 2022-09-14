function pizzaRewards(customers, minOrders, minPrice) {
    let arr = [];
    for (let val in customers) {
      let count = 0;
      for (let i = 0; i < customers[val].length; i++) if (customers[val][i] >= minPrice) count++;
      if (count >= minOrders) arr.push(val);
    } return arr;
}