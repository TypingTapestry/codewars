function luckCheck(ticket) {
    let sum = s => s.split('').map(num => parseInt(num)).reduce((a, b) => a + b);
    let half = ticket.length / 2;
    return sum(ticket.slice(Math.ceil(half))) === sum(ticket.slice(0, half));
}