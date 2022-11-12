function reindeers(presents) {
    if (presents === 0) return 2;
    if (presents <= 30) return 3;
    if (presents <= 60) return 4;
    if (presents <= 90) return 5;
    if (presents <= 120) return 6;
    if (presents <= 150) return 7;
    if (presents <= 180) return 8;
    else throw new Error();
}