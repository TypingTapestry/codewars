function deleteNth(arr, n) {
    while (true) {
      for (var i = 0; i < arr.length; i++) {
        let count = 0;
        for (var x = 0; x < arr.length; x++) {
          if (arr[i] === arr[x]) {
            count++;
            if (count > n) {
              arr.splice(x, 1);
              break;
            }
          }
        } if (x !== arr.length) break;
      } if (i === arr.length) break;
    } return arr;
}