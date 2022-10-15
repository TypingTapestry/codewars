function one_two_three() {
    let random = '' + one_two() + one_two();
    switch (random) {
        case '11':
          return 1;
          break;
        case '12':
          return 2;
          break;
        case '21':
          return 3;
          break;
        case '22':
          return one_two_three();
          break;
        default: 0;      
    }
}