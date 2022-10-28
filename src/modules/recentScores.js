const leaderBoard = document.getElementById('main-content');

const recentScores = `
<section class="score-section">
            <div>
                <h3 class="score-header">Recent scores</h3>
                <button type="button" class="btn">Refresh</button>
            </div>
            <div class="score-wrap">
                <ul class="scores">
                    <li>Name: 188</li>
                    <li>Name: 182</li>
                    <li>Name: 176</li>
                    <li>Name: 171</li>
                    <li>Name: 166</li>
                    <li>Name: 154</li>
                    <li>Name: 150</li>
                </ul>
            </div>
        </section>`;

const appendRecentScores = () => {
  leaderBoard.insertAdjacentHTML('afterbegin', recentScores);
};

export default appendRecentScores;