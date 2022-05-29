function scramble(str1, str2) {
    let char = str1.split('').reduce((acc, cur) => {
      if (cur in acc) {
        acc[cur]++;
      } else acc[cur] = 1;
        return acc;
    }, {});
    for (let i = 0; i < str2.length; i++) {
      if (char[str2[i]] > 0) {
        char[str2[i]]--;
      } else return false;
    } return true;
}