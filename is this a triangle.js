// function isTriangle(a, b, c) {
//     let side = [a, b, c].sort();
//     return (side[0] + side[1] > side[2]);
// }

// INCORRECT

function isTriangle(a, b, c) {
    return a < b + c && a > b - c && b < a + c && b > a - c && c < a + b && c > a - b;
}