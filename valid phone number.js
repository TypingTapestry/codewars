function validPhoneNumber(phoneNumber) {
    if (phoneNumber.length !== 14) return false;
    if (phoneNumber[4] !== ')') return false;
    if (phoneNumber[5] !== ' ') return false;
    if (phoneNumber[9] !== '-') return false;
    return true;
}