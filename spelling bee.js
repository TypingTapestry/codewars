howManyBees = function(hive) {
    let count = 0;
    if (!hive) return 0;
    for (let i = 0; i < hive.length; i++) for (let x = 0; x < hive[i].length; x++) if (hive[i][x] == 'b' && hive[i][x + 1] == 'e' && hive[i][x + 2] == 'e') count++;
    for (let i = 0; i < hive.length; i++) for (let x = 0; x < hive[i].length; x++) if (hive[i][x] == 'e' && hive[i][x + 1] == 'e' && hive[i][x + 2] == 'b') count++;
    for (let i = 0; i < hive.length - 2; i++) for (let x = 0; x < hive[i].length; x++) if (hive[i][x] == 'b' && hive[i + 1][x] == 'e' && hive[i + 2][x] == 'e') count++;
    for (let i = 0; i < hive.length - 2; i++) for (let x = 0; x < hive[i].length; x++) if (hive[i][x] == 'e' && hive[i + 1][x] == 'e' && hive[i + 2][x] == 'b') count++;
    return count;
}