import Vue from "vue";
import App from "./App.vue";
import "@/assets/index.css";
import Loading from "@/components/circleLoading.vue";
import Illustration from "@/components/illustration.vue";
import aos from "aos";
import "aos/dist/aos.css";
import VueRouter from "vue-router";
import { router } from "@/router";

Vue.component("Loading-animation", Loading);
Vue.component("Illustration", Illustration);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const app = new Vue({
  created() {
    aos.init();
  },
  router,
  render: h => h(App)
});

app.$mount("#app");
