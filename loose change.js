function looseChange(cents) {
    let obj = {
      Nickels: 0,
      Pennies: 0,
      Dimes: 0,
      Quarters: 0
    };
    if (cents <= 0) return obj;
    obj.Nickels = Math.floor(cents % 25 % 10 / 5);
    obj.Pennies = Math.floor(cents % 25 % 10 % 5);
    obj.Dimes = Math.floor(cents % 25 / 10);
    obj.Quarters = Math.floor(cents / 25);
    return obj;
}