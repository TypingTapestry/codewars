function twosDifference(input) {
    input.sort((a, b) => a - b);
    let arr = [];
    for (let i = 0; i < input.length; i++) {
      for (let x = 1; x < input.length; x++) {
        if (input[x] - input[i] === 2) arr.push([input[i], input[x]]);
      }
    } return arr;
}