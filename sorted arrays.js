function nthSmallest(...args) {
    let n = args.pop();
    return (args + '').split(',').sort((a, b) => a - b)[n - 1] * 1;
}