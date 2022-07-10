function once(fn) {
    let count = 0;
    return function (...args) {
      if (count++ < 1) return fn(...args);
    }
}