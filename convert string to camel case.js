function toCamelCase(str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
      let letter = arr[i];
      if (letter === '-' || letter === '_') {
        arr[i + 1] = arr[i + 1].toUpperCase();
        arr[i] = '';
      }
    } return arr.join('');
}