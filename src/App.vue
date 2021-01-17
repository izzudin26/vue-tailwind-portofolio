<template>
  <div id="app" class="preload">
    <Profile />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Profile from "@/components/profile.vue";

export default Vue.extend({
  name: "App",
  components: {
    Profile
  }
});
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
