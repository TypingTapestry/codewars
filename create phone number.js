function createPhoneNumber(numbers) {
    let str = "(xxx) xxx-xxxx";
    for (let i = 0; i < numbers.length; i++) {
      str = str.replace('x', numbers[i]);
    } return str;
}