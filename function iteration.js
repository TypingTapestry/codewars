let createIterator = (func, n) => {
    return x => {
      for (let i = 0; i < n; i++) x = func(x);
      return x;
    }
}