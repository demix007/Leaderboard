const scoreBoard = (array) => {
  const scoresBoard = document.querySelector('#scores-board');
  array.forEach((element) => {
    const boardItem = document.createElement('li');
    boardItem.innerHTML = `${element.user}: ${element.score}`;
    scoresBoard.appendChild(boardItem);
  });
};

export default scoreBoard;