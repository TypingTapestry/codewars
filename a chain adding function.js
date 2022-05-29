function add(n) {
    let sum = (num) => add(n + num);
    sum.toString = () => n;
    return sum;
}