function iterPi(epsilon) {
    let pi = 0;
    let idx = 0;
    while (1) {
      pi += Math.pow(-1, idx) / (idx * 2 + 1) * 4;
      if (Math.abs(Math.PI - pi) < epsilon) break;
      else idx++;
    } return [idx + 1, Number(pi.toFixed(10))];
}