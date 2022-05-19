function countSmileys(arr) {
    let smileys = [':)', ';)', ':D', ';D', ':-D', ';-D', ':-)', ';-)', ':~D', ';~D', ':~)', ';~)'];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (smileys.includes(arr[i])) {
        count++;
      }
    } return count;
}