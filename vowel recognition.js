function vowelRecognition(input) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    let num = 0;
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) if (arr.includes(input[i].toLowerCase())) num += (i + 1) * (input.length - i);
    return num;
}