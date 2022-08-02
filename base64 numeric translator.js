let base64toBase10 = str => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    return str.split('').reduce((acc, cur) => acc * 64 + chars.indexOf(cur), 0);
}