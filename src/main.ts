import Vue from "vue";
import App from "./App.vue";
import "@/assets/index.css";
import Loading from "@/components/circleLoading.vue";
import Illustration from "@/components/illustration.vue";

Vue.component("Loading-animation", Loading);
Vue.component("Illustration", Illustration);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
