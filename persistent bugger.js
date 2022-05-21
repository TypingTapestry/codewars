function persistence(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((pValue, cValue) => pValue * cValue);
    } return i;
}