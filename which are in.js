function inArray(arr1, arr2) {
    return arr1.filter(function (char) {
      return arr2.join(' ').includes(char);
    }).sort();
}