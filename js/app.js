window.addEventListener('DOMContentLoaded', function() {

      //Tabs 

const tabs = document.querySelectorAll ('.tabheader__item'),
      tabsContent = document.querySelectorAll ('.tabcontent'),
      tabsPerents = document.querySelector ('.tabheader__items');

      function hideTabsContent () {
         tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
         });

         tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
         });
      }

      function showTabsContent (i = 0) {
         tabsContent[i].classList.remove('hide');
         tabsContent[i].classList.add('show', 'fade');
         tabs[i].classList.add ('tabheader__item_active');
      }

      hideTabsContent ();
      showTabsContent();

      tabsPerents.addEventListener('click', function(event) {
         const target = event.target;
         if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
               if(target == item) {
                  hideTabsContent ();
                  showTabsContent(i);
               }
            });
         }
      });

      //Slider

      let offset = 0;
      let slideIndex = 1;
  
      const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          width = window.getComputedStyle(slidesWrapper).width,
          slidesField = document.querySelector('.offer__slider-inner');
  
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

   //Calculator

const result = document.querySelector('.calculating__result span');

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
                  if (e.target.getAttribute('data-ratio')) {
                     ratio = +e.target.getAttribute('data-ratio');
                     localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                  } else {
                     sex = e.target.getAttribute('id');
                     localStorage.setItem('sex', e.target.getAttribute('id'));
                  }

                  elements.forEach(elem => {
                     elem.classList.remove(activeClass);
                  });

                  e.target.classList.add(activeClass);

                  calcTotal();
            });
         });
      }

      getStaticInformation('#gender div', 'calculating__choose-item_active');
      getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

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

    //Modal

const btn = document.querySelectorAll ('[data-modal]'),
            modal = document.querySelector ('.modal');

      function openModal () {
         modal.classList.add ('show', 'fadeModal');
         modal.classList.remove ('hide');
         document.body.style.overflow = 'hidden';
         clearInterval (timerID);
         window.removeEventListener ('scroll', showModalByScroll);
      }

      btn.forEach (item => {
         item.addEventListener ('click', openModal);
      });

      function closeModal () {
            modal.classList.add ('hide');
            modal.classList.remove ('show', 'fadeModal');
            document.body.style.overflow = '';
      }

      modal.addEventListener ('click', (event) => {
         if (event.target === modal || event.target.getAttribute ('data-close') == '') {
            closeModal ();
         }
      });

      document.addEventListener ('keydown', (event) => {
         if (event.code === 'Escape' && modal.classList.contains ('show')) {
            closeModal();
         }
      });

      const timerID = setTimeout (openModal, 100000);

      function showModalByScroll() {
         if (window.pageYOffset + document.documentElement.clientHeight>=document.documentElement.scrollHeight) {
            openModal ();
            window.removeEventListener ('scroll', showModalByScroll);
         }
      }

      window.addEventListener ('scroll', showModalByScroll);

     // Forms

const forms = document.querySelectorAll('form');

const formMessage = {
   loading: 'img/spinner.svg',
   success: 'Спасибо! Мы скоро свяжемся с Вами!',
   errorr: 'Что то пошло не так'
};

      forms.forEach (item => {
         bindPostData (item);
      });

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

      postData ('http://localhost:3000/requests', json)
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
   openModal ();

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
      closeModal ();
   }, 4000);
}

});