function makeSentence(parts) {
    let res = parts[0];
    for (let i = 1; i < parts.length; i++) {
      if (parts[i] === '.') continue;
      if (parts[i] === ',') res += parts[i];
      else res += ' ' + parts[i];
    } return res + '.';
}