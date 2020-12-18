'use strict';

let navButtons = document.querySelectorAll('.nav__btn');
let hoverSound = document.getElementById('clickAudio');

navButtons.forEach(element => {
    element.addEventListener('mouseenter', () => {
        hoverSound.play();
    });
});
