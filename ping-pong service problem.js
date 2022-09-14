function service(score) {
    let a = Number(score.split(':')[0]);
    let b = Number(score.split(':')[1]);
    if (a >= 20 && b >= 20) return Math.floor((a + b) / 2) % 2 === 0 ? 'first' : 'second';
    else return Math.floor((a + b) / 5) % 2 === 0 ? 'first' : 'second';
}