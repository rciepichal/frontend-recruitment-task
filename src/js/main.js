const showBtn = document.querySelector('#counterBtn');
const resetBtn = document.querySelector('#resetCountBtn');
const spanText = document.querySelector('#counterText');
const modal = document.querySelector('#modalContent');
const icon = document.querySelector('#closeIcon');
let count = 0;
(function () {
  if (!!localStorage.getItem('counterValue')) {
    count = Number(localStorage.getItem('counterValue'));
  }
})();

const showModal = () => {
  modal.style.display = 'flex';
};
const hideModal = () => {
  modal.style.display = 'none';
};
const counter = () => {
  count += 1;
  localStorage.setItem('counterValue', count);
};
const countTextUpdate = () => {
  spanText.innerText = `${count} times`;
};

const resetBtnToggler = () => {
  if (count >= 5 || localStorage.getItem('counterValue') >= 5) {
    resetBtn.style.display = 'block';
  } else {
    resetBtn.style.display = 'none ';
  }
};

const countReset = () => {
  count = 0;
  localStorage.setItem('counterValue', count);
  resetBtnToggler();
};

showBtn.addEventListener('click', () => {
  counter();
  countTextUpdate();
  resetBtnToggler();
  showModal();
});
resetBtn.addEventListener('click', () => {
  countReset();
  countTextUpdate();
});
icon.addEventListener('click', () => hideModal());

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
