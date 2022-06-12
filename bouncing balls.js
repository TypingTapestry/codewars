function bouncingBall(h, bounce, window) {
    let seen = -1;
    if (bounce > 0 && bounce < 1) {
      while (h > window) {
        seen += 2;
        h *= bounce;
      }
    } return seen;
}