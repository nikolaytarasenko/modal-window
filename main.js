const openButton = document.querySelector('#open-btn');
const closeButton = document.querySelector('#close-btn');
const overlay = document.querySelector('.overlay');

const showModal = e => overlay.classList.add('show');

const hideModal = e => (e.target === overlay || e.target === closeButton) ? overlay.classList.remove('show') : null;

openButton.addEventListener('click', showModal);
window.addEventListener('click', hideModal);