'use strict';
console.log('script !!');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelector('.add-activity');

const showModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
btnShowModal.addEventListener('click', showModal);

document.addEventListener('keydown', function (event) {
    //console.log(event.key);
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
