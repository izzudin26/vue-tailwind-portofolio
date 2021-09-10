<template>
  <div class="preload space-y-10">
    <Profile />
    <About />
    <Specialized />
    <Skills />
    <Tools />
    <Projects />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Profile from "@/components/profile.vue";
import About from "@/components/about.vue";
import Skills from "@/components/skills.vue";
import Specialized from "@/components/specialized.vue";
import Tools from "@/components/tools.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/footer.vue";

export default Vue.extend({
  name: "App",
  components: {
    Profile,
    About,
    Specialized,
    Skills,
    Tools,
    Projects,
    Footer
  }
});
</script>

<style></style>
