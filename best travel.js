function chooseBestSum(distance, towns, list) {
    if (list.length < towns) return null;
    let result = [[]];
    for (let item of list) {
      let copy = [...result];
      for (let prefix of copy) result.push(prefix.concat(item));
    } return result.filter(arr => arr.length === towns).map(item => item.reduce((a, b) => a + b), 0).filter(item => item <= distance).sort((a, b) => b - a)[0] || null;
}