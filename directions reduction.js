function dirReduc(arr) {
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i] + arr[i + 1]) {
          case 'NORTHSOUTH':
            arr.splice(i, 2);
            i = i - i -1;
            break;
          case 'EASTWEST':
            arr.splice(i, 2);
            i = i - i -1;
            break;
          case 'SOUTHNORTH':
            arr.splice(i, 2);
            i = i - i -1;
            break;
          case 'WESTEAST':
            arr.splice(i, 2);
            i = i - i -1;
            break;
          default: 0;
      }
    } return arr;
}