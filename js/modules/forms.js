
import {openModal, closeModal} from './modal';
import {postData} from '../services/servisec';

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
      openModal ('.modal');

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
         closeModal ('.modal');
      }, 4000);
   }

}

export default forms;