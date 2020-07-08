document.querySelector('[data-card="3"]').addEventListener('click', (event) => {
  const sElement = event.target.closest('.card-slectable');

  if (!sElement) {
    return;
  }

  const inputElement = sElement.querySelector('input');
  const value = inputElement.value;

  toggleItem(data.question3, value);

  showCard(data.currentCardNumber);
});

function showCard3(n) {
  const cardElement = document.querySelector(`[data-card="${n}"]`);
  cardElement.style.display = '';

  const nextButton = document.querySelector('[data-next]');
  nextButton.setAttribute('disabled', true);

  cardElement.querySelectorAll('input').forEach((inputElement) => {
    inputElement.removeAttribute('checked');

    if (inputElement.checked) {
      inputElement.checked = false;
    }

    if (data.question3.includes(inputElement.value)) {
      inputElement.checked = true;
    }
  });

  if (data.question3.length) {
    nextButton.removeAttribute('disabled');
  }
}

function toggleItem(array, item) {
  if (array.includes(item)) {
    const index = array.indexOf(item);
    array.splice(index, 1);
  } else {
    array.push(item);
  }
}
