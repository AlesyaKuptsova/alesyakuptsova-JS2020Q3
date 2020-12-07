'use stict';
/*used the code(SPA) from https://medium.com/better-programming/js-vanilla-script-spa-1b29b43ea475*/
export function Route(name, htmlName, defaultRoute) {
  try {
    if (!name || !htmlName) {
      throw 'error: name and htmlName params are mandatories';
    }
    this.constructor(name, htmlName, defaultRoute);
  } catch (e) {
    console.error(e);
  }
}

Route.prototype = {
  name: undefined,
  htmlName: undefined,
  default: undefined,
  constructor(name, htmlName, defaultRoute) {
    this.name = name;
    this.htmlName = htmlName;
    this.default = defaultRoute;
  },
  isActiveRoute(hashedPath) {
    return hashedPath.replace('#', '') === this.name;
  },
}