const clearScoreBoard = () => {
  const scoresBoard = document.querySelector('#scores-board');
  while (scoresBoard.firstChild) {
    scoresBoard.removeChild(scoresBoard.firstChild);
  }
};

export default clearScoreBoard;