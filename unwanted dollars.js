function money_value(s) {
    let arr = s.split('');
    let res = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '$' || arr[i] === ' ') continue;
      else res += arr[i];
    }
    if (res === '-' || res === '') return 0;
    return Number(res);
}