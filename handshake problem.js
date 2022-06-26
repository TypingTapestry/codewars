function getParticipants(handshakes) {
    if (handshakes < 1) return 0;
    let count = 0;
    let result = 0;
    while (result < handshakes) {
      result += count;
      count++;
    } return count;
}