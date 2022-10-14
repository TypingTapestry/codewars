function fib_rabbits(n, b) {
    let [maturePairs, immaturePairs] = [0, 1];
    for (let i = 0; i < n; i++) [maturePairs, immaturePairs] = [maturePairs + immaturePairs, maturePairs * b];
    return maturePairs;
}