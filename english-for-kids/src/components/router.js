'use strict';
/*used the code(SPA) from https://medium.com/better-programming/js-vanilla-script-spa-1b29b43ea475*/
export function Router(routes, onLoad) {
  try {
    if (!routes) {
      throw 'error: routes param is mandatory';
    }
    this.constructor(routes, onLoad);
    this.init();
  } catch (e) {
    console.error(e);
  }
}

Router.prototype = {
  routes: undefined,
  rootElem: undefined,
  onLoad: undefined,
  constructor(routes, onLoad) {
    this.routes = routes;
    this.onLoad = onLoad;
    this.rootElem = document.getElementById('app');
  },
  init() {
    const r = this.routes;
    (function (scope, r) {
      window.addEventListener('hashchange', (e) => {
        scope.hasChanged(scope, r);
      });
    }(this, r));
    this.hasChanged(this, r);
  },
  hasChanged(scope, r) {
    if (window.location.hash.length > 0) {
      for (let i = 0, { length } = r; i < length; i++) {
        var route = r[i];
        if (route.isActiveRoute(window.location.hash.substr(1))) {
          scope.goToRoute(route.htmlName);
        }
      }
    } else {
      for (let i = 0, {length} = r; i < length; i++) {
        var route = r[i];
        if (route.default) {
          scope.goToRoute(route.htmlName);
        }
      }
    }
  },
  goToRoute(htmlName) {
    (function (scope) {
      let url = 'pages/' + htmlName;
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          scope.rootElem.innerHTML = this.responseText;
          scope.onLoad(scope.rootElem);
        }
      };
      xhttp.open('GET', url, true);
      xhttp.send();
    }(this));
  },
};
