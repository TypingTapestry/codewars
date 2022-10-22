let fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
    stringOne = stringOne || 'Fizz';
    stringTwo = stringTwo || 'Buzz';
    numOne = numOne || 3;
    numTwo = numTwo || 5;
    let arr = [];
    for (let i = 1; i <= 100; i++) {
      if (i % numOne === 0 && i % numTwo === 0) arr.push(stringOne + stringTwo);
      else if (i % numOne === 0) arr.push(stringOne);
      else if (i % numTwo === 0) arr.push(stringTwo);
      else arr.push(i);
    } return arr;
}