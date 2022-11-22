function minPermutation(n) {
    let arr = [];
    let order = (n + '').replace('-', '').split('').sort((a, b) => +a - +b);
    if (n === 0) return n;
    while (order[0] === '0') arr.push(order.shift());
    if (arr.length) order = [order[0], ...arr, ...order.slice(1)];
    return n / Math.abs(n) * +order.join('');
}