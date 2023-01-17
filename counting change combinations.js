function countChange(money, coins) {
    let ways = new Array(money + 1).fill(0);
    ways[0] = 1;
    for (let i = 0; i < coins.length; i++) for (let x = 1; x <= money; x++) if (coins[i] <= x) ways[x] += ways[x - coins[i]];
    return ways[money];
}