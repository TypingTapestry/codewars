function wheatFromChaff(values) {
    let beg = 0;
    let end = values.length - 1;
    while (beg <= end) {
      if (values[beg] > 0) {
        while (beg < end) {
          if (values[end] < 0) {
            values[beg] += values[end];
            values[end] = values[beg] - values[end];
            values[beg] -= values[end];
            break;
          } end--;
        }
      } beg++;
    } return values;
}