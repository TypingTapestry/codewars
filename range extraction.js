function solution(list) {
    let res = '';
    let start = list[0];
    let end = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] === end + 1) end = list[i];
      else {
        if (start === end) res += start + ',';
        else if (end - start === 1) res += start + ',' + end + ',';
        else res += start + '-' + end + ',';
        start = list[i];
        end = list[i];
      }
    }
    if (start === end) res += start;
    else if (end - start === 1) res += start + ',' + end;
    else res += start + '-' + end;
    return res;
}