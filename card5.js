document.querySelector('[data-name').addEventListener('keyup', (event) => {
  data.question5.name = event.target.value;

  showCard(data.currentCardNumber);
});

document.querySelector('[data-email').addEventListener('keyup', (event) => {
  data.question5.email = event.target.value;

  showCard(data.currentCardNumber);
});

document.querySelector('[data-confirm').addEventListener('click', () => {
  data.question5.confirm = !data.question5.confirm;

  showCard(data.currentCardNumber);
});

function showCard5(n) {
  const cardElement = document.querySelector(`[data-card="${n}"]`);
  cardElement.style.display = '';

  const nextButton = document.querySelector('[data-next]');
  nextButton.setAttribute('disabled', true);

  if (data.question5.name && data.question5.email && data.question5.confirm) {
    nextButton.removeAttribute('disabled');
  }
}
