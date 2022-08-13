let midpointSum = (n) => {
    for (let i = 1; i < n.length - 1; i++) if (n.slice(0, i).reduce((acc, cur) => acc + cur) === n.slice(1 + i).reduce((acc, cur) => acc + cur)) return i;
}