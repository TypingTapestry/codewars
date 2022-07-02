function parse(data) {
    let arr = [];
    let val = 0;
    for (let command of data) {
      switch (command) {
          case 'i':
            val++;
            break;
          case 'd':
            val--;
            break;
          case 's':
            val *= val;
            break;
          case 'o':
            arr.push(val);
            break;
          default: 0;
      }
    } return arr;
}