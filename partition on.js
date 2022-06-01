function partitionOn(pred, items) {
    let f = 0;
    for (let i = 0; i < items.length; i++) {
      if (!pred(items[i])) items.splice(f++, 0, items.splice(i, 1)[0])
    } return f;
}