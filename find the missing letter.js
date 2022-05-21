function findMissingLetter(array) {
    let str = array.join('');
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i + 1) - str.charCodeAt(i) !== 1) {
        return String.fromCharCode(str.charCodeAt(i) + 1);
      }
    }
}