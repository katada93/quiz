const data = {
  currentCardNumber: 1,
  question2: null,
  question3: [],
  question4: null,
  question5: {
    name: '',
    email: '',
    confirm: false,
  },
};

showCard(data.currentCardNumber);

document.querySelector('[data-start]').addEventListener('click', () => {
  data.currentCardNumber = 2;
  showCard(2);
});

document.querySelector('[data-back]').addEventListener('click', () => {
  --data.currentCardNumber;
  showCard(data.currentCardNumber);
});

document.querySelector('[data-next]').addEventListener('click', () => {
  data.currentCardNumber++;
  showCard(data.currentCardNumber);
});

document.querySelector('[data-card="2"]').addEventListener('click', (event) => {
  const liElement = event.target.closest('li');

  if (!liElement) {
    return;
  }

  const inputElement = liElement.querySelector('input');
  data.question2 = inputElement.value;

  showCard(data.currentCardNumber);
});

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

document.querySelector('[data-card="4"]').addEventListener('click', (event) => {
  const liElement = event.target.closest('li');

  if (!liElement) {
    return;
  }

  const inputElement = liElement.querySelector('input');
  data.question4 = inputElement.value;

  showCard(data.currentCardNumber);
});

document.querySelector('[data-name').addEventListener('keyup', (event) => {
  data.question5.name = event.target.value;

  showCard(data.currentCardNumber);
});

document.querySelector('[data-address').addEventListener('keyup', (event) => {
  data.question5.email = event.target.value;

  showCard(data.currentCardNumber);
});

document.querySelector('[data-confirm').addEventListener('click', () => {
  data.question5.confirm = true;

  showCard(data.currentCardNumber);
});

function showCard(n) {
  if (n === 1 || n === 6) {
    hideFooter();
    hideHeader();
  } else {
    showFooter();
    showHeader();
  }

  document
    .querySelectorAll('[data-card]')
    .forEach((x) => (x.style.display = 'none'));

  const cardElement = document.querySelector(`[data-card="${n}"]`);
  cardElement.style.display = '';

  const nextButton = document.querySelector('[data-next]');
  nextButton.setAttribute('disabled', true);

  if (n === 2) {
    cardElement.querySelectorAll('input').forEach((inputElement) => {
      inputElement.checked = false;

      if (inputElement.value === data.question2) {
        inputElement.checked = true;
      }
    });

    if (data.question2) {
      nextButton.removeAttribute('disabled');
    }
  } else if (n === 3) {
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
  } else if (n === 4) {
    cardElement.querySelectorAll('input').forEach((inputElement) => {
      inputElement.checked = false;

      if (inputElement.value === data.question4) {
        inputElement.checked = true;
      }
    });

    if (data.question4) {
      nextButton.removeAttribute('disabled');
    }
  } else if (n === 5) {
    if (data.question5.name && data.question5.email && data.question5.confirm) {
      nextButton.removeAttribute('disabled');
    }
  }
}

function showFooter() {
  document.querySelector('[data-footer]').style.display = '';
}

function hideFooter() {
  document.querySelector('[data-footer]').style.display = 'none';
}

function showHeader() {
  document.querySelector('[data-header]').style.display = '';
}

function hideHeader() {
  document.querySelector('[data-header]').style.display = 'none';
}

function toggleItem(array, item) {
  if (array.includes(item)) {
    const index = array.indexOf(item);
    array.splice(index, 1);
  } else {
    array.push(item);
  }
}
