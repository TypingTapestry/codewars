function twistedSum(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (String(i).length > 1) {
        String(i).split('').forEach(el => {
          count += Number(el);
        });
      } else count += i;
    } return count;
}