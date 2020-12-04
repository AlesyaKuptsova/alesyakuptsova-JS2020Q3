'use strict';

import '/src/style.css';
import {Router} from '/home/alesya/rsschool/alesyakuptsova-JS2020Q3/english-for-kids/src/components/router.js';
import {Route} from '/home/alesya/rsschool/alesyakuptsova-JS2020Q3/english-for-kids/src/components/route.js';

(function () {
    function init() {
        var router = new Router([
            new Route('main_page', 'main_page.html', true),
            new Route('Action_set_A', 'action_a_category.html'),
            new Route('Action_set_B', 'action_b_categoty.html'),
            new Route('animal_set_a', 'animal_a_category.html'),
            new Route('animal_set_b', 'animal_b_category.html'),
            new Route('clothes', 'clothes_category.html'),
            new Route('emotion', 'emotion_category.html'),
            new Route('fruit', 'fruit_category.html'),
            new Route('sweets', 'sweets_category.html'),

        ]);
    }
    init();
}());

/* from https://stackoverflow.com/questions/64152962/javascript-css-hamburger-menu-working-in-codepen-but-not-when-deployed*/
let checkbox = document.querySelector( '#myInput' );
let icon = document.querySelector( '#menuToggle span' );
let listener = function( e ) {
  if( e.target != checkbox && e.target != icon ) {
    checkbox.checked = false;
    document.removeEventListener( 'click', listener );
  }
};

checkbox.addEventListener( 'click', function(){
  if( this.checked ) {
    document.addEventListener( 'click', listener );
  }
});


