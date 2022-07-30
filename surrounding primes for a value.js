let arr = [];
let isPrime = [];
let num = 11000000;
for (let i = 0; i <= num; i++) arr.push(true);
for (let i = 2; i <= num; i++) if (arr[i]) for (let x = i + i; x <= num; x += i) arr[x] = null;
for (let i = 2; i <= num; i++) if (arr[i]) isPrime.push(i);

function primeBefAft(num) {
    let i = 0;
    while (isPrime[i] < num) i++;
    if (isPrime[i] !== num) return [isPrime[i - 1], isPrime[i]];
    return [isPrime[i - 1], isPrime[i + 1]];
}