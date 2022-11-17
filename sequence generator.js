function* sequenceGen(...args) {
    while (1) {
      yield args[0];
      args = [...args.slice(1), args.reduce((a, b) => a + b)];
    }
}