function bmi(weight, height) {
    var formula = weight / Math.pow(height, 2);
    if (formula <= 18.5) {
      return 'Underweight';
    } else if (formula <= 25) {
      return 'Normal';
    } else if (formula <= 30) {
      return 'Overweight';
    } else return 'Obese';
}