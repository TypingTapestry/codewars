function expandedForm(num) {
    num = num.toString();
    let arr = [];
    for (let i = 0; i < num.length; i++) {
      if (num[i] == 0) continue;
      else arr.push(num[i] + '0'.repeat(num.length - i - 1));
    } return arr.join(' + ');
}