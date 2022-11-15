let constructor = s => s.fives * 5 + s.tens * 10 + s.twenties * 20;

function mostMoney(students) {
    let highest = Math.max(...students.map(x => constructor(x)));
    let richest = students.filter(x => highest === constructor(x));
    return richest.length === 1 ? richest[0].name : 'all';
}