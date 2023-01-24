function sumStrings(a, b) {
    let num = 0;
    let result = '';
    a = a.replace(/^0+/, '').split('').reverse();
    b = b.replace(/^0+/, '').split('').reverse();
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      let x = i < a.length ? Number(a[i]) : 0;
      let y = i < b.length ? Number(b[i]) : 0;
      let sum = x + y + num;
      result = sum % 10 + result;
      num = Math.floor(sum / 10);
    } if (num) result = num + result;
    return result.replace(/^0+/, '');
}