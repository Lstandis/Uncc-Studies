const root = document.documentElement;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', buttonClick);
});

function buttonClick(event) {
    const btn = event.target;
    btn.classList.toggle('open');
    btn.nextElementSibling.classList.toggle('open');
    root.style.setProperty('--content-height', btn.nextElementSibling.scrollHeight + 'px');

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      if (button !== btn && button.classList.contains('open')) {
        button.classList.remove('open');
        button.nextElementSibling.classList.remove('open');
      }
    });
  }