/*
export const gotoTop = {
  install(Vue, options) {
    Vue.prototype.gotoTop = () => {
      window.scrollTo(0, 0);
      console.log("helpers/utils/gotoTop");
    };
  },
};
*/

export const utils = {
  gotoTop: {
    install: (Vue) => {
      Vue.prototype.gotoTop = () => {
        window.scrollTo(0, 0);
        console.log("helpers/utils/gotoTop");
      };
    },
  },
};

export default utils;
