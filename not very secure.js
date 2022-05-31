function alphanumeric(string) {
    let charCheck = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    if (!string.length) return false;
    for (let char of string) {
      if (!charCheck.includes(char)) return false;
    } return true;
}