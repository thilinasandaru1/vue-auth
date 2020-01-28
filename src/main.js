import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");

if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

new Vue({
  render: h => h(App)
}).$mount("#app");
