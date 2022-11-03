function getLengthOfMissingArray(arrayOfArrays) {
    let num = 0;
    if (arrayOfArrays === null || arrayOfArrays.includes(null) || !arrayOfArrays.length) return num;
    let len = arrayOfArrays.map(el => el.length).sort((a, b) => a - b);
    if (len[0] === 0) return num;
    for (let i = 1; i < len.length; i++) {
      if (len[i] - len[i - 1] === 1) num += Number('');
      else return num += len[i] - 1;
    } return 0;
}