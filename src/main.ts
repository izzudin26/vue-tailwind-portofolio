import Vue from "vue";
import App from "./App.vue";
import "@/assets/index.css";
import Loading from "@/components/circleLoading.vue";

Vue.component("Loading-animation", Loading);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
