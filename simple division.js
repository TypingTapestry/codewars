function solve(a, b) {
    let idx = 2;
    while (b !== 1) {
      if (b % idx === 0) {
        if (a % idx !== 0) return false;
        b /= idx;
        idx = 2;
      } else idx++;
    } return true;
}