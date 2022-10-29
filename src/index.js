import appendRecentScores from './modules/recentScores.js';
import appendAddYourScore from './modules/addNewScores.js';
import './style.css';
import postScore from './modules/postScores.js';
import getScore from './modules/getScores.js';
import scoreBoard from './modules/scoreBoard.js';
import displayAddMessage from './modules/displayMessage.js';
import clearScoreBoard from './modules/clearScoreBoard.js';

appendRecentScores();
appendAddYourScore();

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/01GGHFHZCJGZ9QK9XS33QYPB9E/scores';

const addNewScores = document.querySelector('.add-score-form');
const refreshBoardBtn = document.querySelector('.refresh-btn');

addNewScores.addEventListener('submit', (e) => {
  e.preventDefault();
  const score = document.querySelector('#score-input');
  const name = document.querySelector('#name-input');

  if (name.value === '' || score.value === '') {
    const message = 'Fill up empty field(s)';
    displayAddMessage(addNewScores, message, 'error-message');
  } else {
    const newUserScore = {
      user: name.value,
      score: score.value,
    };
    postScore(newUserScore, url)
      .then((response) => {
        displayAddMessage(addNewScores, response.result, 'success-message');
      });
    name.value = '';
    score.value = '';
  }
});

refreshBoardBtn.addEventListener('click', () => {
  getScore(url).then((response) => {
    clearScoreBoard();
    scoreBoard(response.result);
  });
});