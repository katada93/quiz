document.querySelector('[data-card="2"]').addEventListener('click', (event) => {
  const liElement = event.target.closest('li');

  if (!liElement) {
    return;
  }

  const inputElement = liElement.querySelector('input');
  data.question2 = inputElement.value;

  showCard(data.currentCardNumber);
});

function showCard2(n) {
  const cardElement = document.querySelector(`[data-card="${n}"]`);
  cardElement.style.display = '';

  const nextButton = document.querySelector('[data-next]');
  nextButton.setAttribute('disabled', true);

  cardElement.querySelectorAll('input').forEach((inputElement) => {
    inputElement.checked = false;

    if (inputElement.value === data.question2) {
      inputElement.checked = true;
    }
  });

  if (data.question2) {
    nextButton.removeAttribute('disabled');
  }
}
