function bingo(ticket, win) {
    let count = 0;
    for (let i = 0; i < ticket.length; i++) for (let x = 0; x < ticket[i][0].length; x++) if (ticket[i][0][x].charCodeAt() === ticket[i][1]) count++;
    if (count >= win) return 'Winner!';
    return 'Loser!';
}