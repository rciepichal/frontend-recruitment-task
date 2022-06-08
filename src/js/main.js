const showBtn = document.querySelector('#counterBtn');
const resetBtn = document.querySelector('#resetCountBtn');
const spanText = document.querySelector('#counterText');
const modal = document.querySelector('#modalContent');
const modalAlert = document.querySelector('.section__alert');
const icon = document.querySelector('#closeIcon');
const url = 'https://jsonplaceholder.typicode.com/users';
const usersWrapper = document.querySelector('#usersWrapper');
const usersTable = document.querySelector('#usersTable');
const loader = document.querySelector('#loader');
let count = 0;
(function () {
  if (!!localStorage.getItem('counterValue')) {
    count = Number(localStorage.getItem('counterValue'));
  }
})();

const usersService = async () => {
  try {
    const response = await fetch(url);
    if (response.status >= 200 && response.status < 300) {
      const data = await response.json();
      hideLoader();
      generateTable(data);
    } else {
      usersWrapper.innerHTML = `<h3>Sorry, we are unable to show data. Try to refresh a page.`;
    }
  } catch (error) {
    throw new Error(error);
  }
};

const showModal = () => {
  modalAlert.classList.remove('hide');
  modal.classList.remove('hide');
  modal.classList.add('show');
  modalAlert.classList.add('show');
};
const hideModal = () => {
  modalAlert.classList.add('hide');
  modal.classList.add('hide');
  modalAlert.classList.remove('show');
  modal.classList.remove('show');
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

const rowStyle = (id) => {
  if (id % 2 !== 0) {
    return 'even';
  }
};

const generateTable = (users) => {
  for (const user of users) {
    const { id, name, email, address, phone, company } = user;
    usersTable.style.display = 'table';
    const tRow = document.createElement('tr');
    tRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${address.city}, ${address.street} ${address.suite}</td>
    <td>${phone}</td>
    <td>${company.name}</td>`;
    tRow.classList.add(rowStyle(id));
    usersTable.append(tRow);
  }
};

const hideLoader = () => {
  loader.style.display = 'none';
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
    hideModal();
  }
});

usersService();
