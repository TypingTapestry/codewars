function createMessage(str) {
    return function (res) {
      if (res === undefined) return str;
      return createMessage(str + ' ' + res);
    }
}