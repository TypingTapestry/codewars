function exchangeWith(a, b) {
    let aLen = a.length;
    while (b.length !== 0) a.push(b.pop());
    for (let i = 0; i < aLen; i++) b.unshift(a.shift());
}