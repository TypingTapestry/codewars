function sortString(string, ordering) {
    let arr = [];
    for (let char in ordering) while (string.includes(ordering[char])) {
      arr.push(ordering[char]);
      string = string.replace(ordering[char], '');
    } return arr.join('') + string;
}