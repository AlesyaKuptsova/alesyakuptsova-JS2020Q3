'use strict';

import { Router } from './router.js';
import { Route } from './route.js';
import cardsArray from '../data/cards.js';

function playSound(audio) {
  audio.currentTime = 0;
  audio.play();
}

function createCards(rootElement) {
  const categoryNameElement = document.getElementById("category_name");
  if (categoryNameElement === null) {
    return;
  }
  const containers = rootElement.getElementsByClassName('cards-container');
  if (containers.length === 0) {
    return;
  }
  const container = containers.item(0);
  const categoryName = categoryNameElement.value;
  const currentCardsIndex = cardsArray[0].indexOf(categoryName);
  if (currentCardsIndex === -1) {
    return;
  }
  const currentCards = cardsArray[currentCardsIndex+1];
  for (let i = 0; i < currentCards.length; ++i) {
    const elem = currentCards[i];
    const card = document.createElement('card');
    card.innerHTML =
    `<div class="flip-card">
        <div class="flip-card-inner">
           <div class="flip-card-front">
             <audio src="${elem.audioSrc}"></audio>
             <img src="${elem.image}" alt="" class="img_category">
              <div class='text_icon_card'>
                <h2>${elem.word}</h2>
                <img src="assets/img/icon/rotate.svg" alt="rotate" class="rotate_icon">
              </div>
           </div>
          <div class="flip-card-back">
              <img src="${elem.image}" alt="dance" class="img_category">
              <h2>${elem.translation}</h2>
          </div>
        </div>
    </div>`;

    const rotateButton = card.getElementsByClassName('rotate_icon').item(0);
    const flipCard = card.getElementsByClassName('flip-card-inner').item(0);
    const cardBack = card.getElementsByClassName('flip-card-back').item(0);

    container.appendChild(card);
    card.addEventListener('click', (e) => {
      if (!flipCard.classList.contains('do-flip')) {
        playSound(card.getElementsByTagName('audio').item(0));
      }
    });

    cardBack.addEventListener('mouseleave', (e) => {
      flipCard.classList.remove('do-flip');
    });
    rotateButton.onclick = (e) => {
      flipCard.classList.add('do-flip');
      e.stopPropagation();
    };
  }
}

/*used the code(SPA) from https://medium.com/better-programming/js-vanilla-script-spa-1b29b43ea475*/
(function () {
  function init() {
    let router = new Router([
      new Route('main_page', 'main_page.html', true),
      new Route('Action_set_A', 'action_a_category.html'),
      new Route('Action_set_B', 'action_b_categoty.html'),
      new Route('animal_set_a', 'animal_a_category.html'),
      new Route('animal_set_b', 'animal_b_category.html'),
      new Route('clothes', 'clothes_category.html'),
      new Route('emotion', 'emotion_category.html'),
      new Route('fruit', 'fruit_category.html'),
      new Route('sweets', 'sweets_category.html'),
    ], createCards);
  }
  init();
}());

/*used the code from https://stackoverflow.com/questions/64152962/javascript-css-hamburger-menu-working-in-codepen-but-not-when-deployed*/

const checkbox = document.querySelector('#myInput');
const icon = document.querySelector('#menuToggle span');
const listener = function (e) {
  if (e.target !== checkbox && e.target !== icon) {
    checkbox.checked = false;
    document.removeEventListener('click', listener);
  }
};

checkbox.addEventListener('click', function () {
  if (this.checked) {
    document.addEventListener('click', listener);
  }
});

function updateActiveCategory() {
  const currentHash = window.location.hash;
  const elements = document.getElementsByClassName('category');
  for (let i = 0; i < elements.length; i++) {
    let href = elements.item(i).href;
    let curhash = new URL(href).hash;
    if (curhash === currentHash) {
      elements.item(i).classList.add('active');
    }else {
      elements.item(i).classList.remove('active');
    }
  }
}

window.addEventListener('hashchange', updateActiveCategory);
updateActiveCategory();