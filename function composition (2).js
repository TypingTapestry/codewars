function compose(...argument) {
    return function (num) {
      while (argument.length !== 0) num = argument.pop()(num);
      return num;
    }
}