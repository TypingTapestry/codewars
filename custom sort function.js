function sort(items) {
    for (let i = 0; i < items.length - 1; i++) {
      for (let x = 0; x < items.length - 1; x++) {
        let temp = items[x];
        if (temp > items[x + 1]) {
          items[x] = items[x + 1];
          items[x + 1] = temp;
        }
      }
    } return items;
}