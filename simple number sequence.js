function missing(s) {
    for (let i = 1; i <= s.length; i++) {
      let str = s;
      let num = +s.slice(0, i);
      let res = undefined;
      while (str.length) {
        let check = String(num++);
        if (str.startsWith(check)) str = str.slice(check.length);
        else if (!res) res = +check;
        else {
          res = undefined;
          break;
        }
      } if (res) return res;
    } return -1;
}