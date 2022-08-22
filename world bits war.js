function bitsWar(numbers) {
    let num = 0;
    let temp = 0;
    let odd = 0;
    let even = 0;
    for (let i = 0; i < numbers.length; i++) {
      temp = numbers[i].toString(2);
      if (numbers[i] % 2 == 1 || numbers[i] % 2 == -1) {
        for (let x = 0; x < temp.length; x++) if (temp[x] == 1) num++;
        if (numbers[i] < 0) odd -= num;
        else odd += num;
        num = 0;
      } else {
        for (let y = 0; y < temp.length; y++) if (temp[y] == 1) num++;
        if (numbers[i] < 0) even -= num;
        else even += num;
        num = 0;
      }
    }
    if (odd > even) return 'odds win';
    if (odd < even) return 'evens win';
    if (odd == even) return 'tie';
}