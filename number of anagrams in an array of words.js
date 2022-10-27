function anagramCounter(wordsArray) {
    let count = 0;
    let arr = wordsArray.map(x => x.toUpperCase().split('').sort().join(''));
    for (let i = 0; i < wordsArray.length; i++) for (let x = 0; x < i; x++) if (arr[i] === arr[x]) count++;
    return count;
}