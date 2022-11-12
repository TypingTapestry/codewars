let removeDuplicateIds = obj => {
    let ret = {};
    let keys = Object.keys(obj).sort((a, b) => b - a);
    let set = new Set();
    for (let key of keys) {
      ret[key] = [];
      for (let char of obj[key]) {
        if (!set.has(char)) ret[key].push(char);
        set.add(char);
      }
    } return ret;
}