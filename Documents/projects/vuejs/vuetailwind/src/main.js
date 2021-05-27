import Vue from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import router from "./router/index";
//index.css

Vue.config.productionTip = false

new Vue({
  router,

  render: (h) => h(App),
}).$mount("#app");
