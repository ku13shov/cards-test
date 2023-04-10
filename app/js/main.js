'use strict'

const cardsInner = document.querySelector('.cards__inner');

cardsInner.addEventListener('click', (e) => {
    if (e.target.closest('.card')) {
        e.target.closest('.card').classList.toggle('active');
    }
});