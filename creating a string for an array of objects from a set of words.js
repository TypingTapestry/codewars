function wordsToObject(input) {
    let arr = input.split(' ');
    let str = '[';
    for (let i = 0; i < arr.length; i += 2) {
      str += `{name : '${arr[i]}', id : '${arr[i + 1]}'}`;
      if (i < arr.length - 2) str += ', ';
      else str += ']';
    } return str;
}