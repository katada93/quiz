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

function showCard(n) {
  updateProgress();

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

  if (n === 2) {
    showCard2(n);
  } else if (n === 3) {
    showCard3(n);
  } else if (n === 4) {
    showCard4(n);
  } else if (n === 5) {
    showCard5(n);
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

function updateProgress() {
  const pElement = document.querySelector('[data-progressbar]');

  let progress = 0;

  if (data.question2) {
    progress += 1;
  }
  if (data.question3.length) {
    progress += 1;
  }
  if (data.question4) {
    progress += 1;
  }
  if (data.question5.name) {
    progress += 1;
  }
  if (data.question5.email) {
    progress += 1;
  }
  if (data.question5.confirm) {
    progress += 1;
  }
  if (progress === 6) {
    pElement.classList.add('bg-success');
  }

  progress = (progress / 6) * 100;

  pElement.style.width = `${progress}%`;
}
