function twoSum(numbers, target) {
    for (let i = 0; i < (numbers.length - 1); i++) {
      for (let x = (i + 1); x < numbers.length; x++) {
        if (target === numbers[i] + numbers[x])
          return [i, x];
      }
    }
}