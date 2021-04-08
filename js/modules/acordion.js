function acordion (accordionSelector) {

   const acordionItem = document.querySelectorAll(accordionSelector);

   acordionItem.forEach(item => {
      item.classList.remove('active');
      item.addEventListener('click', () => {
         item.classList.toggle('active');
      });
   });
}

export default acordion;