function showCard(n) {
  if (n === 1 || n === 6) {
    hideHeader();
    hideFooter();
  } else {
    showHeader();
    showFooter();
  }
  document.querySelectorAll('[data-card]')
    .forEach(elem => {
      elem.style.display = 'none';
    })
  document.querySelector(`[data-card="${n}"]`).style.display = '';
}

function showHeader() {
  document.querySelector('[data-header]').style.display = '';
}
function hideHeader() {
  document.querySelector('[data-header]').style.display = 'none';
}

function showFooter() {
  document.querySelector('[data-footer]').style.display = '';
}
function hideFooter() {
  document.querySelector('[data-footer]').style.display = 'none';
}