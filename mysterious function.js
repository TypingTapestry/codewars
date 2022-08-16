let getNum = function(n) {
    let arr = n.toString();
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '0' || arr[i] === '6' || arr[i] === '9') num++;
      if (arr[i] === '8') num += 2;
    } return num;
}