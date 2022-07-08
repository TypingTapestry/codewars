function elo(xp, opponent, score, k) {
    let playerRating = 0;
    if (!k) {
      k = function (xp) {
        if (xp.length < 30) return 25;
        else {
          let updatedRating = false;
          for (let num of xp) {
            if (num >= 2400) updatedRating = true;
          } return updatedRating ? 10 : 15;
        }
      }
    }
    if (xp.length === 0) playerRating = 1000;
    else playerRating = xp[xp.length - 1];
    let count = 1 / (1 + Math.pow(10, (opponent - playerRating) / 400));
    let result = playerRating + k(xp) * (score - count);
    return Math.round(result);
}