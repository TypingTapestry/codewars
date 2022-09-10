function isOddHeavy(n) {
    let odd = n.filter(num => num % 2 !== 0);
    let even = n.filter(num => num % 2 === 0);
    if (odd.length === 0) return false;
    for (let i = 0; i < odd.length; i++) for (let x = 0; x < even.length; x++) if (odd[i] <= even[x]) return false;
    return true;
}