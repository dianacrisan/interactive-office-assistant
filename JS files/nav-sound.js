'use strict';

let navButtons = document.querySelectorAll('.nav__btn');
let sound = document.getElementById('clickAudio');

navButtons.forEach(element => {
    element.addEventListener('mouseenter', () => {
        sound.play();
    });
});
