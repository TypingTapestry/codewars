function detectInt() {
    for (let i = 1; i < 50000; i++) {
      let count = 0;
      for (let x = 0; x < arguments.length; x++) if (arguments[x](i)) count++;
      if (count === arguments.length) return i;
    }
}