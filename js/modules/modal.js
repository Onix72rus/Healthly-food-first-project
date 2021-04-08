
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

export default modal;
export {closeModal};
export {openModal};