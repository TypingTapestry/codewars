function searchSubstr(text, search, overlap) {
    if (search === '') return 0;
    if (overlap === undefined) overlap = true;
    let count = 0;
    let index = text.indexOf(search);
    while (index !== -1) {
      count++;
      if (overlap) index = text.indexOf(search, index + 1);
      else index = text.indexOf(search, index + search.length);
    } return count;
}