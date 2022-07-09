function scoreHand(cards) {
    let score = 0;
    let aces = 0;
    for (let i = 0; i < cards.length; i++) {
      switch (cards[i]) {
          case 'A':
            score += 11;
            aces++;
            break;
          case 'K':
            score += 10;
            break;
          case 'Q':
            score += 10;
            break;
          case 'J':
            score += 10;
            break;
          default: score += Number(cards[i]);
      }
    } while (score > 21 && aces > 0) {
      score -= 10;
      aces--;
    } return score;
}