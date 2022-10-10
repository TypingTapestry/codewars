function reduceByRules(numbers, rules) {
    return numbers.reduce((acc, cur, idx) => {
      return rules[(idx - 1) % rules.length](acc, cur);
    });
}