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

export default tabs;