const questions = document.querySelectorAll('.faq__question');
const answer = document.querySelectorAll('.faq__answer');
const arrow = document.querySelectorAll('.arrow');

console.log(questions);
console.log(answer);

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function () {
    answer[i].classList.toggle('hidden');
    !answer[i].classList.contains('hidden')
      ? (arrow[i].src = 'images/arrow-up.png')
      : (arrow[i].src = 'images/arrow-down.png');
  });
}
