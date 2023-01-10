const LeaderBoard = document.getElementById('content');

const recentScore = `
<section class="score-board">
    <div>
        <h3>Recent scores</h3>
        <button type="button" class="btn refresh-btn">Refresh</button>
    </div>
    <div class="score-wrap">
        <ul class="scores" id="scores-board">
        </ul>
    </div>
</section>`;

const appendRecentScores = () => {
  LeaderBoard.insertAdjacentHTML('afterbegin', recentScore);
};

export default appendRecentScores;