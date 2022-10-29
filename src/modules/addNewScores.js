const app = document.getElementById('content');

const addScore = `
<section class="add-score-section">
            <form action="" class="add-score-form">
                <h3>Add your score</h3>
                <input type="text" placeholder="Your name:" id="name-input" class="form-input"> 
                <input type="number" placeholder="Your score:" id="score-input" class="form-input"> 
                <button type="submit" class="btn submit-score-btn">Submit</button>
            </form>
        </section>`;

const appendAddYourScore = () => {
  app.insertAdjacentHTML('beforeend', addScore);
};

export default appendAddYourScore;