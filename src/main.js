import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/global.styl"
import myPlugin from "./plugins/myPlugin.js"

Vue.config.productionTip = false;

Vue.use(myPlugin)

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className="add_bg";
},
beforeDestroy: function() {
    document.body.removeAttribute("class","add_bg");
}
}).$mount("#app");



