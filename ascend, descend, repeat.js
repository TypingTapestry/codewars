function ascendDescend(length, minimum, maximum) {
    let arr = [];
    if (minimum === maximum) return new String(minimum).repeat(length);
    if (length === 0 || minimum > maximum) return '';
    for (let i = minimum; i < maximum; i++) arr.push(i);
    for (let i = maximum; i >= minimum + 1; i--) arr.push(i);
    return arr.join('').repeat(length).slice(0, length);
}