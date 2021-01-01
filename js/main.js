const questionPool = [
  {
    id: 1,
    title: 'do you accept all major credit cards?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
  },
  {
    id: 2,
    title: 'do you support local farmers?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
  },
  {
    id: 3,
    title: 'do you use organic ingredients?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.'
  }
];
const sectionCenter = document.querySelector('.section-center');


window.addEventListener('DOMContentLoaded', () => {
  displayQuestions(questionPool);
});


function displayQuestions(quesItems) {
  let queArticle = quesItems.map((item) => {
    return `<article class="question">
      <div class="question-title">
        <p>${item.title}</p>
        <button type="button" class="question-btn">
          <img src="./img/plus-math-26.png">
        </button>
      </div>
      <div class="question-text">
        <p>${item.text}</p>
      </div>
    </article>`;
  });
  queArticle = queArticle.join('');
  sectionCenter.innerHTML = queArticle;

  buttonOperator();
}

function buttonOperator() {
  const questions = sectionCenter.querySelectorAll('.question');

  questions.forEach((question) => {
    const btn = question.querySelector('.question-btn');
    
    btn.addEventListener('click', () => {
      questions.forEach((item) => {
        if (item !== question) {
          item.classList.remove('show-text');
        }
      });
      question.classList.toggle('show-text');
    });
  });
}
