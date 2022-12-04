function lcm(...args) {
    let res = 1;
    if (args.length === 0) return 1;
    if (args.includes(0)) return 0;
    for (let arg of args) {
      let gcd = 0;
      if (arg === 1) continue;
      for (let i = 1; i <= arg; i++) if (arg % i === 0 && res % i === 0) gcd = i;
      let lcm = (arg / gcd) * res;
      res = lcm;
    } return res;
}