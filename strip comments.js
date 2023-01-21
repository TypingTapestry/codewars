function solution(input, markers) {
    return input.split('\n').map(line => {
      for (let marker of markers) {
        let idx = line.indexOf(marker);
        if (idx !== -1) line = line.slice(0, idx);
      } return line.trim();
    }).join('\n');
}