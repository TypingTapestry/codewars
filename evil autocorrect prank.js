function autocorrect(input) {
    let str = input.split(' ');
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'u' || str[i].toLowerCase() === 'you' || str[i].toLowerCase() === 'youu' || str[i].toLowerCase() === 'youuu' || str[i].toLowerCase() === 'youuuu' || str[i].toLowerCase() === 'youuuuu') str[i] = 'your sister';
      if (str[i].toLowerCase() === 'you!') str[i] = 'your sister!';
    } return str.join(' ');
}