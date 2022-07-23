function getWinner(listOfBallots) {
    let arr = [];
    for (let i = 0; i < listOfBallots.length; i++) {
      if (arr[listOfBallots[i]] == null) arr[listOfBallots[i]] = 1;
      else arr[listOfBallots[i]]++;
      if (arr[listOfBallots[i]] > listOfBallots.length / 2) return listOfBallots[i];
    } return null;
}