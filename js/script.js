import tabs from './modules/tabs';
import cards from './modules/cards';
import forms from './modules/forms';
import modalWindow from './modules/modal_window';
import nutritionCalculator from './modules/nutrition_calculator';
import slider from './modules/slider';
import timer from './modules/timer';
import { openModal } from './modules/modal_window';

window.addEventListener ('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    cards();
    forms('form', modalTimerId);
    modalWindow('[data-modal]', '.modal', modalTimerId);
    nutritionCalculator();
    slider({
        container: '.offer__slider',
        nextBtn: '.offer__slider-next',
        prevBtn: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    timer('.timer', '2023-06-11');

});
