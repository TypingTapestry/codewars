function isValidIP(str) {
    let octets = str.split('.');
    return (octets.length === 4) && octets.reduce((acc, octet) =>
      (acc) && (String(Number(octet)) === octet) && (octet >= 0) && (octet <= 255), true);
}