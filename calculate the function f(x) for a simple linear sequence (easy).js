function getFunction(sequence) {
    let arr = [];
    for (let i = 0; i < sequence.length - 1; i++) arr.push(sequence[i + 1] - sequence[i]);
    for (let i = 0; i < arr.length - 1; i++) if (arr[i] !== arr[i + 1]) return 'Non-linear sequence';
    if (arr[0] === 0) return `f(x) = ${sequence[0]}`;
    if (sequence[0] === 0) return (`f(x) = ${arr[0] !== 1 ? arr[0] : ''}x`).replace('-1x', '-x');
    else return (`f(x) = ${arr[0] !== 1 ? arr[0] : ''}x ${sequence[0] >= 0 ? '+' : '-'} ${Math.abs(sequence[0])}`).replace('-1x', '-x');
}