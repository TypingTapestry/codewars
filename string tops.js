function tops(msg) {
    let res = '';
    for (let i = 1, x = i + 1; i < msg.length; i += x++ + x++) res = msg[i] + res;
    return res;
}