function countSheeps(arrayOfSheep) {
    let num = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] == true)
        num++;
    } return num;
}