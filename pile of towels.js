function sortThePile(pileOfTowels, weeklyUsedTowels) {
    for (let num of weeklyUsedTowels) {
      let arr = [];
      for (let i = 0; i < num; i++) {
        let used = pileOfTowels.pop();
        if (used !== null) arr.push(used);
      }
      arr.sort().reverse();
      pileOfTowels = [...pileOfTowels, ...arr];
    } return pileOfTowels;
}