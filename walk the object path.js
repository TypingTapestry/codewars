function find(object, path) {
    let arr = path.split('.');
    for (let i = 0; i < arr.length; i++) {
      if (object.hasOwnProperty(arr[i])) object = object[arr[i]];
      else return undefined;
    } return object;
}