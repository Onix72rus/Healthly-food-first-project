window.addEventListener('DOMContentLoaded', function() {
// Slider

let slideIndex = 0;
const slides = document.querySelectorAll('[data-slider]'),
      prev = document.querySelector('.slider__btn--prev'),
      next = document.querySelector('.slider__btn--next');

function showSlides (n) {
   if(n > slides.length) {
      slideIndex = 1;
   }

   if(n < 1) {
      slideIndex = slides.length;
   }
}

function plusSlides (n) {
   showSlides(slideIndex +=n);
}

function hideSlidesContent () {
   slides.forEach (item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
   });
}

function showSlidesContent (slideIndex) {
   slides[slideIndex].classList.remove('hide');
   slides[slideIndex].classList.add('show', 'fade');
}

hideSlidesContent();
showSlidesContent(slideIndex);

prev.addEventListener('click', function(event){
   event.preventDefault();
   plusSlides(-1);
   hideSlidesContent();
   showSlidesContent(slideIndex);
});

next.addEventListener('click', function(event){
   event.preventDefault();
   plusSlides(1);
   hideSlidesContent();
   showSlidesContent(slideIndex);
});

//showSlides(slideIndex);

//function showSlides (n) {
//   if(n > slides.length) {
//      slideIndex = 1;
//   }

//   if(n < 1) {
//      slideIndex = slides.length;
//   }

//   slides.forEach((item) => item.style.display = 'none');

//   slides[slideIndex - 1].style.display = 'block';
//}

//function plusSlides (n) {
//   showSlides(slideIndex +=n);
//}

//prev.addEventListener('click', function(event){
//   event.preventDefault();
//   plusSlides(-1);
//});

//next.addEventListener('click', function(event){
//   event.preventDefault();
//   plusSlides(1);
//});

// Tabs 

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

});