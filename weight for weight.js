function orderWeight(string) {
    return string.split(' ').sort((a, b) => {
      let weightA = a.split('').reduce((acc, cur) => acc + cur++, 0);
      let weightB = b.split('').reduce((acc, cur) => acc + cur++, 0);
      if (weightA < weightB) {
        return -1;
      } else if (weightA > weightB) {
        return 1;
      } else {
        if (a < b) {
          return -1;
        } else return 1;
      } return 0;
    }).join(' ');
}