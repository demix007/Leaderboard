const leaderBoard = document.getElementById('main-content');

const addYourScore = `
<section class="add-score-section">
            <form action="#" class="add-score-form">
                <h3>Add your score</h3>
                <input type="text" placeholder="Your name" class="input-el"> 
                <input type="text" placeholder="Your score" class="input-el"> 
                <button type="button" class="btn submit-score-btn">Submit</button>
            </form>
        </section>`;

const appendAddYourScore = () => {
  leaderBoard.insertAdjacentHTML('beforeend', addYourScore);
};

export default appendAddYourScore;