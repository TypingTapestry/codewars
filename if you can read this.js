function to_nato(words) {
    let w = words.toUpperCase().split(' ').join('').split('');
    for (let i = 0; i < w.length; i++) {
      switch (w[i]) {
          case 'A':
            w[i] = 'Alfa';
            break;
          case 'B':
            w[i] = 'Bravo';
            break;
          case 'C':
            w[i] = 'Charlie';
            break;
          case 'D':
            w[i] = 'Delta';
            break;
          case 'E':
            w[i] = 'Echo';
            break;
          case 'F':
            w[i] = 'Foxtrot';
            break;
          case 'G':
            w[i] = 'Golf';
            break;
          case 'H':
            w[i] = 'Hotel';
            break;
          case 'I':
            w[i] = 'India';
            break;
          case 'J':
            w[i] = 'Juliett';
            break;
          case 'K':
            w[i] = 'Kilo';
            break;
          case 'L':
            w[i] = 'Lima';
            break;
          case 'M':
            w[i] = 'Mike';
            break;
          case 'N':
            w[i] = 'November';
            break;
          case 'O':
            w[i] = 'Oscar';
            break;
          case 'P':
            w[i] = 'Papa';
            break;
          case 'Q':
            w[i] = 'Quebec';
            break;
          case 'R':
            w[i] = 'Romeo';
            break;
          case 'S':
            w[i] = 'Sierra';
            break;
          case 'T':
            w[i] = 'Tango';
            break;
          case 'U':
            w[i] = 'Uniform';
            break;
          case 'V':
            w[i] = 'Victor';
            break;
          case 'W':
            w[i] = 'Whiskey';
            break;
          case 'X':
            w[i] = 'Xray';
            break;
          case 'Y':
            w[i] = 'Yankee';
            break;
          case 'Z':
            w[i] = 'Zulu';
            break;
          default: 0;
      }
    } return w.join(' ');
}