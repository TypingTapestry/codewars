function numberOfPairs(gloves) {
    let obj = gloves.reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
    return Object.values(obj).reduce((acc, cur) => acc + parseInt(cur / 2), 0);
}