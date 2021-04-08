/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/acordion.js":
/*!********************************!*\
  !*** ./js/modules/acordion.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function acordion (accordionSelector) {

   const acordionItem = document.querySelectorAll(accordionSelector);

   acordionItem.forEach(item => {
      item.classList.remove('active');
      item.addEventListener('click', () => {
         item.classList.toggle('active');
      });
   });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (acordion);

/***/ }),

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculator (resultSelector, lowCalId, smallCalId, mediumCalId, highCalId) {

   const result = document.querySelector(resultSelector),
         lowCal = document.querySelector(lowCalId),
         smallCal = document.querySelector(smallCalId),
         mediumCal = document.querySelector(mediumCalId),
         highCal = document.querySelector(highCalId);

   let sex, height, weight, age, ratio;

   if (localStorage.getItem('sex')) {
      sex = localStorage.getItem('sex');
   } else {
      sex = 'female';
      localStorage.setItem('sex', 'female');
   }

   if (localStorage.getItem('ratio')) {
      ratio = localStorage.getItem('ratio');
   } else {
      ratio = 1.375;
      localStorage.setItem('ratio', 1.375);
   }

   function calcTotal() {
      if (!sex || !height || !weight || !age || !ratio) {
         result.textContent = '____';
         return;
      }
      if (sex === 'female') {
         result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
      } else {
         result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
      }

   }

   calcTotal();

   function initLocalSettings(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(elem => {
         elem.classList.remove(activeClass);
         if (elem.getAttribute('id') === localStorage.getItem('sex')) {
               elem.classList.add(activeClass);
         }
         if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
               elem.classList.add(activeClass);
         }
      });
   }

   initLocalSettings('#gender div', 'calculating__choose-item_active');
   initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

   function getStaticInformation(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(elem => {
         elem.addEventListener('click', (e) => {
            if (e.currentTarget.getAttribute('data-ratio')) {
               ratio = +e.currentTarget.getAttribute('data-ratio');
               localStorage.setItem('ratio', +e.currentTarget.getAttribute('data-ratio'));
            } else {
               sex = e.currentTarget.getAttribute('id');
               localStorage.setItem('sex', e.currentTarget.getAttribute('id'));
            }


               const checkCaloriesCalc = new Promise(function (resolve, reject){
                  document.querySelectorAll ('.calories__btn').forEach(item => {
                     item.classList.remove(activeClass);
                     resolve();
                  });
               }).then(() => {

               if(result.innerHTML <= '1200') {
                  lowCal.classList.add(activeClass);
               } else if (result.innerHTML >= '1500' && result.innerHTML < '2000') {
                  smallCal.classList.add(activeClass);
               } else if (result.innerHTML >= '2000' && result.innerHTML < '2500') {
                  mediumCal.classList.add(activeClass);
               } else if (result.innerHTML >= '2500') {
                  highCal.classList.add(activeClass);
               }
               }).then (() => {
                  btnTriger ();
               }).catch(()=>{
                  alert('Произошла ошибка');
               });
               checkCaloriesCalc.then( () => {
                  console.log('ПОЛУЧИЛОСЬ!!!!!!!!!!!!!');
               });


               function btnTriger () {
                  elements.forEach(elem => {
                     elem.classList.remove(activeClass);
                  });
                  e.currentTarget.classList.add(activeClass);
               }

               btnTriger ();
               calcTotal();
         });
      });
   }

   getStaticInformation('#gender div', 'calculating__choose-item_active');
   getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
   getStaticInformation('.calories__btn', 'calculating__choose-item_active');


   function getDynamicInformation(selector) {
      const input = document.querySelector(selector);

      input.addEventListener('input', () => {
         if (input.value.match(/\D/g)) {
               input.style.border = "1px solid red";
         } else {
               input.style.border = 'none';
         }
         switch(input.getAttribute('id')) {
               case "height":
                  height = +input.value;
                  break;
               case "weight":
                  weight = +input.value;
                  break;
               case "age":
                  age = +input.value;
                  break;
         }

         calcTotal();
      });
   }

   getDynamicInformation('#height');
   getDynamicInformation('#weight');
   getDynamicInformation('#age');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/card.js":
/*!****************************!*\
  !*** ./js/modules/card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");



function card () {

   class MenuCard {
      constructor(id, menuPrice, menuExample, srcOne, srcTwo, srcThree, srcFour, srcFive, price, parentSelector) {
         this.id = id;
         this.menuPrice = menuPrice;
         this.menuExample = menuExample;
         this.srcOne = srcOne;
         this.srcTwo = srcTwo;
         this.srcThree = srcThree;
         this.srcFour = srcFour;
         this.srcFive = srcFive;
         this.price = price;
         this.parent = document.querySelector(parentSelector);
      }

      render() {
         const element = document.createElement('div');
         element.classList.add("menu__item");
         element.id = `${this.id}`;
         element.innerHTML = `
                  <h3 class="menu__title">Ваше меню:</h3>
                  <h4 class="menu__price">${this.menuPrice}</h4>
                  <div class="menu__example">${this.menuExample}</div>
                  <div class="example">
                     <div class="example__item">
                        <img class="example__img" src=${this.srcOne} alt="#">
                     </div>
                     <div class="example__item">
                        <img class="example__img" src=${this.srcTwo} alt="#">
                     </div>
                     <div class="example__item">
                        <img class="example__img" src=${this.srcThree} alt="#">
                     </div>
                     <div class="example__item">
                        <img class="example__img" src=${this.srcFour} alt="#">
                     </div>
                     <div class="example__item">
                        <img class="example__img" src=${this.srcFive} alt="#">
                     </div>
                  </div>
                  <div class="delivery">Доставка пн-ср-пт в любой двухчасовой интервал с 6 до 12 утра</div>
                  <div class="clarification">Питание с понедельника по субботу</div>
                  <div class="price">${this.price}</div>
                  <button class="btn btn__example" data-modal>Заказать</button>
         `;
         this.parent.append(element);
      }
      
   }

   new MenuCard (
      "content-1",
      'SPORT 1 НЕДЕЛЯ<span>1 131 ₽/ день</span>',
      'Пример на день<span>5 приемов / 7 блюд</span>',
      '"img/example/Sport/1.png"',
      '"img/example/Sport/2.png"',
      '"img/example/Sport/3.png"',
      '"img/example/Sport/4.png"',
      '"img/example/Sport/5.png"',
      'Итого 6 дней<span>5649 ₽</span>',
      ".tabs"
   ).render();


   new MenuCard (
      "content-2",
      'FIT 1 НЕДЕЛЯ<span>1 321 ₽/ день</span>',
      'Пример на день<span>5 приемов / 7 блюд</span>',
      '"img/example/Fit/1.png"',
      '"img/example/Fit/2.png"',
      '"img/example/Fit/3.png"',
      '"img/example/Fit/4.png"',
      '"img/example/Fit/5.png"',
      'Итого 6 дней<span>5649 ₽</span>',
      ".tabs"
   ).render();

   new MenuCard (
      "content-3",
      'LIFE 1 НЕДЕЛЯ<span>2 090 ₽/ день</span>',
      'Пример на день<span>4 приема / 5 блюд',
      '"img/example/Life/1.png"',
      '"img/example/Life/2.png"',
      '"img/example/Life/3.png"',
      '"img/example/Life/4.png"',
      '"img/example/Life/5.png"',
      'Итого 5 дней<span>10 450 ₽',
      ".tabs"
   ).render();

   new MenuCard (
      "content-4",
      'VEG 1 НЕДЕЛЯ<span>1 615 ₽/ день</span>',
      'Пример на день<span>5 приемов / 6 блюд</span>',
      '"img/example/Veg/1.png"',
      '"img/example/Veg/2.png"',
      '"img/example/Veg/3.png"',
      '"img/example/Veg/4.png"',
      '"img/example/Veg/5.png"',
      'Итого 5 дней<span>8 075 ₽',
      ".tabs"
   ).render();

   document.querySelectorAll('[data-modal]').forEach(item => {
         item.addEventListener('click', () => {
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal');
         });
      });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_servisec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/servisec */ "./js/services/servisec.js");




function forms (formsSelector) {

   const forms = document.querySelectorAll(formsSelector);

   const formMessage = {
      loading: 'img/spinner.svg',
      success: 'Спасибо! Мы скоро свяжемся с Вами!',
      errorr: 'Что то пошло не так :('
   };

         forms.forEach (item => {
            bindPostData (item);
         });

   function bindPostData (form) {
      form.addEventListener ('submit', (event) => {
         event.preventDefault ();

         let statusMassage = document.createElement('img');
         statusMassage.src = formMessage.loading;
         statusMassage.style.cssText = `
            display: block;
            margin: 0 auto;
         `;
         form.insertAdjacentElement ('afterend', statusMassage);

         const formData = new FormData (form);
         const json = JSON.stringify (Object.fromEntries (formData.entries()));

         //const obj = {};
         //formData.forEach(function(value, key){
         //   obj[key] = value;
         //});

         (0,_services_servisec__WEBPACK_IMPORTED_MODULE_1__.postData) ('http://localhost:3000/requests', json)
         .then (data => {
            console.log (data);
            showThanksModal (formMessage.success);
            statusMassage.remove ();
         }).catch (() => {
            showThanksModal (formMessage.errorr);
         }).finally (() => {
            form.reset();
         });

      });
   }

   function showThanksModal (message) {
      const prevModalDialog = document.querySelector ('.modal__dialog');
      prevModalDialog.classList.add ('hide');
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal) ('.modal');

      const thanksModal = document.createElement('div');
      thanksModal.classList.add ('modal__dialog');

      thanksModal.innerHTML = `
         <div class="modal__content">
            <div data-close class="modal__close">×</div>
            <div class="modal__title">${message}</div>
         </div>
      `;

      document.querySelector ('.modal').append (thanksModal);
      setTimeout (() => {
         thanksModal.remove();
         prevModalDialog.classList.add ('show');
         prevModalDialog.classList.remove ('hide');
         (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal) ('.modal');
      }, 4000);
   }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });

   function openModal (modalTriger) {
   const modal = document.querySelector (modalTriger);
         modal.classList.add ('show', 'fadeModal');
         modal.classList.remove ('hide');
         document.body.style.overflow = 'hidden';
         if(timerID) {
            clearInterval (timerID);
         }
         //window.removeEventListener ('scroll', showModalByScroll);
   }

   function closeModal (modalTriger) {
   const modal = document.querySelector (modalTriger);
         modal.classList.add ('hide');
         modal.classList.remove ('show', 'fadeModal');
         document.body.style.overflow = '';
   }

   const timerID = setTimeout (openModal, 100000);

function modal (modalTriger) {

   const modal = document.querySelector (modalTriger);

   modal.addEventListener ('click', (event) => {
      if (event.target === modal || event.target.getAttribute ('data-close') == '') {
         closeModal (modalTriger);
      }
   });

   document.addEventListener ('keydown', (event) => {
      if (event.code === 'Escape' && modal.classList.contains ('show')) {
         closeModal(modalTriger);
      }
   });



   function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight>=document.documentElement.scrollHeight) {
         openModal (modalTriger);
         window.removeEventListener ('scroll', showModalByScroll);
      }
   }

   window.addEventListener ('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {

   let offset = 0;
   let slideIndex = 1;

   const slides = document.querySelectorAll(container),
         slider = document.querySelector(slide),
         next = document.querySelector(nextArrow),
         prev = document.querySelector(prevArrow),
         total = document.querySelector(totalCounter),
         current = document.querySelector(currentCounter),
         slidesWrapper = document.querySelector(wrapper),
         width = window.getComputedStyle(slidesWrapper).width,
         slidesField = document.querySelector(field);

   if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
      current.textContent =  `0${slideIndex}`;
   } else {
      total.textContent = slides.length;
      current.textContent =  slideIndex;
   }

   slidesField.style.width = 100 * slides.length + '%';
   slidesField.style.display = 'flex';
   slidesField.style.transition = '0.5s all';

   slidesWrapper.style.overflow = 'hidden';

   slides.forEach(slide => {
      slide.style.width = width;
   });

   slider.style.position = 'relative';

   const indicators = document.createElement('ol'),
      dots = [];
   indicators.classList.add('carousel-indicators');
   indicators.style.cssText = `
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;
   `;

   slider.append(indicators);

   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i + 1);
      dot.style.cssText = `
         box-sizing: content-box;
         flex: 0 1 auto;
         width: 30px;
         height: 6px;
         margin-right: 3px;
         margin-left: 3px;
         cursor: pointer;
         background-color: #fff;
         background-clip: padding-box;
         border-top: 10px solid transparent;
         border-bottom: 10px solid transparent;
         opacity: .5;
         transition: opacity .6s ease;
      `;
      if (i == 0) {
         dot.style.opacity = 1;
      }
      indicators.append(dot);
      dots.push(dot);
   }

   next.addEventListener('click', () => {
      if (offset == (deleteNotDigits(width) * (slides.length - 1))) {
         offset = 0;
      } else {
         offset += deleteNotDigits(width); 
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == slides.length) {
         slideIndex = 1;
      } else {
         slideIndex++;
      }

      if (slides.length < 10) {
         current.textContent =  `0${slideIndex}`;
      } else {
         current.textContent =  slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex-1].style.opacity = 1;
   });

   prev.addEventListener('click', () => {
      if (offset == 0) {
         offset = deleteNotDigits(width) * (slides.length - 1);
      } else {
         offset -= deleteNotDigits(width);
      }

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slideIndex == 1) {
         slideIndex = slides.length;
      } else {
         slideIndex--;
      }

      if (slides.length < 10) {
         current.textContent =  `0${slideIndex}`;
      } else {
         current.textContent =  slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex-1].style.opacity = 1;
   });

   dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
         const slideTo = e.target.getAttribute('data-slide-to');

         slideIndex = slideTo;
         offset = deleteNotDigits(width) * (slideTo - 1);

         slidesField.style.transform = `translateX(-${offset}px)`;

         if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
         } else {
            current.textContent =  slideIndex;
         }

         dots.forEach(dot => dot.style.opacity = ".5");
         dots[slideIndex-1].style.opacity = 1;
      });
   });

   function deleteNotDigits(str) {
      return +str.replace(/\D/g, '');
   }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs (tabSelector, tabContent, tabPerents, activeClass) {

   const tabs = document.querySelectorAll (tabSelector),
         tabsContent = document.querySelectorAll (tabContent),
         tabsPerents = document.querySelector (tabPerents);

   function hideTabsContent () {
      tabsContent.forEach(item => {
         item.classList.add('hide');
         item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
         item.classList.remove(activeClass);
      });
   }

   function showTabsContent (i = 0) {
      tabsContent[i].classList.remove('hide');
      tabsContent[i].classList.add('show', 'fade');
      tabs[i].classList.add (activeClass);
   }

   hideTabsContent ();
   showTabsContent();

   tabsPerents.addEventListener('click', function(event) {
      const target = event.target;
      if(target && target.classList.contains(tabSelector.slice(1))) {
         tabs.forEach((item, i) => {
            if(target == item) {
               hideTabsContent ();
               showTabsContent(i);
            }
         });
      }
   });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/services/servisec.js":
/*!*********************************!*\
  !*** ./js/services/servisec.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
   const res = await fetch (url, {
      method: 'POST',
      headers: {
         'Content-type': 'application/json'
      },
      body: data
   });

   return await res.json ();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_acordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/acordion */ "./js/modules/acordion.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/card */ "./js/modules/card.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");

   
   
   
   
   
   
   

window.addEventListener('DOMContentLoaded', function() {

   (0,_modules_acordion__WEBPACK_IMPORTED_MODULE_0__.default)('.accordion__item');
   (0,_modules_calc__WEBPACK_IMPORTED_MODULE_1__.default)('.calculating__result span', '#low__calories', '#small__calories', '#medium__calories', '#high__calories');
   (0,_modules_card__WEBPACK_IMPORTED_MODULE_2__.default)();
   (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__.default)('form');
   (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__.default)('.modal');
   (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__.default)('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)({
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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map