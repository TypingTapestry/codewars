function memo(fn) {
    let cache = new Map();
    return key => {
      if (!cache.has(key)) cache.set(key, fn(key));
      return cache.get(key);
    }
}