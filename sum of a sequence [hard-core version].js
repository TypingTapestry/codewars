function sequenceSum(begin, end, step) {
    let sum = 0;
    if (begin < end && step < 0 || begin > end && step > 0) return 0;
    else {
      if (begin < end) for (let i = begin; i <= end; i += step) sum += i;
      else for (let i = begin; i >= end; i += step) sum += i;
    } return sum;
}