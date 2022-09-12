function ride(group, comet) {
    let groupCode = group.split('').reduce((a, b) => a * (b.charCodeAt() - 64), 1);
    let cometCode = comet.split('').reduce((a, b) => a * (b.charCodeAt() - 64), 1);
    return groupCode % 47 === cometCode % 47 ? 'GO' : 'STAY';
}