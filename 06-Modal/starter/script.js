const btnShowModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
// console.log(btnShowModal);
//  function -01
const showModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', showModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (q) {
  //   console.log(q);

  if (q.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
