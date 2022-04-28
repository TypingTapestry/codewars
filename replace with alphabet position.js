function alphabetPosition(text) {
    let output = '';
    for (let i = 0; i < text.length; i++) {
      let str = text.toUpperCase().charCodeAt(i);
      if (str > 64 && str < 91) {
        output += (str - 64) + ' ';
      }
    } return output.slice(0, output.length - 1);
}