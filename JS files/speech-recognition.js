'use strict';

let speech = true;
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const words = document.getElementById('message-box');
const btnSpeech = document.querySelector('.speech-recognition');

recognition.interimResults = true;
recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');

    words.value = transcript;
});

recognition.onspeechend = () => recognition.stop();

btnSpeech.addEventListener('click', event => {
    recognition.start();
});
