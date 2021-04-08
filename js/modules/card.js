
import {openModal} from './modal';

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
            openModal('.modal');
         });
      });

}

export default card;