function simpleTransposition(text) {
    let rows = '';
    for (let i = 0; i < text.length; i += 2)
      rows += text[i];
    for (let i = 1; i < text.length; i += 2)
      rows += text[i];
    return rows;
}