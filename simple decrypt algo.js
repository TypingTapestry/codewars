function decrypt(encryption) {
    let arr = Array.from({ length: 26 }, () => 0);
    for (let char of encryption) if (/[a-z]/.test(char)) arr[char.charCodeAt() - 97]++;
    return arr.join('');
}