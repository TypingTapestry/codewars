let extend = function () {
    let newObj = {};
    for (let i = 0, len = arguments.length; i < len; i++) {
      if (!isObject(arguments[i])) continue;
      for (let x in arguments[i]) if (!(x in newObj)) newObj[x] = arguments[i][x];
    } return newObj;
}