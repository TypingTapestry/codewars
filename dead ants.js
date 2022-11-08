let deadAntCount = ants => {
    if (ants === null) return 0;
    let an = ants.replace(/ant/g, '');
    let a = 0;
    let n = 0;
    let t = 0;
    for (let i = 0; i < an.length; i++) {
      if (an[i] === 'a') a++;
      if (an[i] === 'n') n++;
      if (an[i] === 't') t++;
    }
    let arr = [a, n, t];
    arr.sort((a, b) => a - b);
    return arr[2];
}