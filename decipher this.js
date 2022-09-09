function decipherThis(str) {
    let arr = [];
    let split = str.split(' ');
    for (let i = 0; i < split.length; i++) {
      let char = '';
      let temp = '';
      for (let x = 0; x < split[i].length; x++) {
        if (!isNaN(Number(split[i][x]))) {
          char += split[i][x];
          continue;
        } temp += split[i][x];
      } char = String.fromCharCode(Number(char));
      if (i === 0) char = char.toUpperCase();
      if (temp.length > 1) temp = temp[temp.length - 1] + temp.slice(1, temp.length - 1) + temp[0];
      arr.push(char + temp);
    } return arr.join(' ');
}