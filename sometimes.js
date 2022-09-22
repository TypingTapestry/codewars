function sometimes(fn) {
    let idx = 0;
    return function () {
      idx++;
      if (idx <= 3 || idx % 2 === 1) return fn.apply(this, arguments);
      else return 'hmm, I don\'t know!';
    }
}