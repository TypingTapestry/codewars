function basicOp(operator, value1, value2) {
    switch (operator) {
        case '+':
          return value1 + value2;
          break;
        case '-':
          return value1 - value2;
          break;
        case '*':
          return value1 * value2;
          break;
        case '/':
          return value1 / value2;
          break;
        default:
          console.log('Invalid input\(s). Please try again.')
    }
}