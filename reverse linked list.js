function reverseList(list) {
    let reversedArr = null;
    while (list) {
      reversedArr = [list[0], reversedArr];
      list = list[1];
    } return reversedArr;
}