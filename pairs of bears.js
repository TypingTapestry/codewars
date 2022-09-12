function bears(x, s) {
    let pairs = '';
    for (let i = 0; i < s.length - 1; i++) {
      let mates = s[i] + s[i + 1];
      if (mates === 'B8' || mates === '8B') {
        pairs += mates;
        i++;
      }
    } return [pairs, x <= pairs.length / 2];
}