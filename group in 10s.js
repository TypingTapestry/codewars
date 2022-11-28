function groupIn10s(...numbers) {
    let arr = [];
    for (let num of numbers) {
      let group = ~~(num / 10);
      if (!arr[group]) arr[group] = [];
      arr[group].push(num);
    } return arr.map(x => x.sort());
}