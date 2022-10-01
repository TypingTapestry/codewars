function solution(number) {
    let d3 = 0;
    let d5 = 0;
    let d15 = 0;
    for (let x = 3; x < number; x += 3) d3 += x;
    for (let y = 5; y < number; y += 5) d5 += y;
    for (let z = 15; z < number; z += 15) d15 += z;
    return d3 + d5 - d15;
}