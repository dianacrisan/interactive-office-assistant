'use strict';

console.log(document.getElementById('activity-name').value);
let dragId = 9;
let box = document.getElementById('box1');
let btnAdd = document.getElementById('submit');

btnAdd.addEventListener('click', event => {
    event.preventDefault();
    let elem = document.createElement('p'); //creating the element
    elem.innerHTML = document.getElementById('activity-name').value; //setting its text
    //setting properties
    elem.draggable = 'true';
    // elem.ondragstart = drag(event);
    elem.id = `${dragId}`;
    dragId++;
    box.appendChild(elem); //appending to a certain div
    recognition.stop();
    closeModal();
});
