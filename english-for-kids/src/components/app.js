'use strict';

import { Router } from './router.js';
import { Route } from './route.js';

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

function createCards(rootElement) {
}

/* from https://stackoverflow.com/questions/64152962/javascript-css-hamburger-menu-working-in-codepen-but-not-when-deployed*/

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