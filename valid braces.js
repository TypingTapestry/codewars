function validBraces(braces) {
    let b = 0;
    while (braces.length !== b.length) {
      b = braces;
      braces = braces.replace('()', '').replace('{}', '').replace('[]', '');
    } return braces.length === 0;
}