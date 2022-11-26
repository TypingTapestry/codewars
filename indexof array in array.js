let searchArray = (arrayToSearch, query) => {
    function arrayToString(arr) {
      if (arr.length !== 2) throw new Error();
      return arr.toString();
    } return arrayToSearch.map(arrayToString).indexOf(arrayToString(query));
}