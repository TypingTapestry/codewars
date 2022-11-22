function pointsNumber(radius) {
    let count = 0;
    for (let i = -radius; i <= radius; i++) for (let x = -radius; x <= radius; x++) if (i * i + x * x <= radius * radius) count++;
    return count;
}