
   import acordion from './modules/acordion';
   import calculator from './modules/calc';
   import card from './modules/card';
   import forms from './modules/forms';
   import modal from './modules/modal';
   import slider from './modules/slider';
   import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', function() {

   acordion('.accordion__item');
   calculator('.calculating__result span', '#low__calories', '#small__calories', '#medium__calories', '#high__calories');
   card();
   forms('form');
   modal('.modal');
   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   slider({
      container: '.offer__slide',
      slide: '.offer__slider',
      nextArrow: '.offer__slider-next',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      field: '.offer__slider-inner'
  });

});