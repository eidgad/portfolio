// plugins/vue-transitions.js
import Vue from "vue";

Vue.mixin({
  transition: {
    name: "page",
    mode: "out-in",
    appear: true,
    css: true,

    // Slide and fade in from right
    beforeEnter(el) {
      el.style.opacity = "0";
      el.style.transform = "translateX(20px)";
    },
    enter(el, done) {
      requestAnimationFrame(() => {
        el.style.transition = "all 0.3s ease";
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      });
      setTimeout(done, 300);
    },
    afterEnter(el) {
      el.style.transition = "";
    },

    // Fade and slide out to left
    beforeLeave(el) {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    },
    leave(el, done) {
      requestAnimationFrame(() => {
        el.style.transition = "all 0.3s ease";
        el.style.opacity = "0";
        el.style.transform = "translateX(-20px)";
      });
      setTimeout(done, 300);
    },
    afterLeave(el) {
      el.style.transition = "";
      el.style.transform = "";
      el.style.opacity = "";
    },
  },
});
