function typist(s) {
    let caps = false;
    return s.split('').reduce((acc, cur) => {
      if (cur === cur.toUpperCase()) {
        acc += !caps ? 2 : 1;
        caps = true;
      } else {
        acc += caps ? 2 : 1;
        caps = false;
      } return acc;
    }, 0);
}