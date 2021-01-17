<template>
  <div class="pt-3 pb-3 mt-12 text-center bg-gray-300 ">
    <span class="p-3 text-base">Izzudin Ar Rafiq &#169; {{ getDate }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    getDate() {
      const date = new Date();
      return date.getFullYear();
    }
  }
});
</script>

<style></style>
