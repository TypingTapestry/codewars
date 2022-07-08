let densityChart = {
    'H': 1.36,
    'W': 1.00,
    'A': 0.87,
    'O': 0.80
};
  
let separateLiquids = glass => [].concat(...glass).sort((a, b) => densityChart[a] - densityChart[b]).reduce((arr, val, i) => {
    if (!(i % glass[0].length)) arr.push([]);
    arr[arr.length - 1].push(val);
    return arr;
}, []);