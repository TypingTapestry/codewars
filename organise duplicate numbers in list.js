function group(array) {
    let arr = [];
    let obj = {};
    for (let num of array) {
      if (!obj[num]) arr.push(obj[num] = []);
      obj[num].push(num);
    } return arr;
}