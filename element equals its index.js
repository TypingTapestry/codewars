function indexEqualsValue(a) {
    let min = 0;
    let max = a.length;
    let neg = -1;
    while (min < max) {
      let num = Math.floor((min + max) / 2);
      if (num < a[num]) max = num;
      else if (num > a[num]) min = num + 1;
      else {
        max = num;
        neg = num;
      }
    } return neg;
}