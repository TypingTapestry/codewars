function isHappy(n) {
    let num = 0;
    if (n === 1) return true;
    if (n === 4) return false;
    for (let i = 0; i < n.toString().length; i++) num += Math.pow(Number(n.toString()[i]), 2);
    return isHappy(num);
}