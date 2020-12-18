'use strict';

let btnNext = document.querySelector('.next');
let btnPrev = document.querySelector('.prev');
let rollSound = document.getElementById('rollAudio');

btnNext.addEventListener('click', () => {
    rollSound.play();
});

btnPrev.addEventListener('click', () => {
    rollSound.play();
});
