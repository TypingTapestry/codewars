let stringSuffix = s => {
    let res = 0;
    for (let i = 0, l = s.length; i < l; i++) {
      let sec = s.slice(i);
      for (let x = 1, l = sec.length; x <= l; x++) if (s.slice(0, x) === sec.slice(0, x)) res++;
    } return res;
}