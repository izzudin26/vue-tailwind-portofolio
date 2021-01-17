import Vue from "vue";
import App from "./App.vue";
import "@/assets/index.css";
import Loading from "@/components/circleLoading.vue";
import Illustration from "@/components/illustration.vue";
import aos from "aos";
import "aos/dist/aos.css";

Vue.component("Loading-animation", Loading);
Vue.component("Illustration", Illustration);
Vue.config.productionTip = false;

new Vue({
  created() {
    aos.init();
  },
  render: h => h(App)
}).$mount("#app");
