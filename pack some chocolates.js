function makeChocolates(small, big, goal) {
    for (let i = 0; i <= small; i++) for (let x = 0; x <= big; x++) if (i * 2 + x * 5 === goal) return i;
    return -1;
}