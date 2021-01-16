<template>
  <img
    :src="image"
    class="mx-auto my-auto md:w-96 lg:w-96 xs:w-80 sm:w-80"
    alt=""
  />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["name"],
  data: () => ({
    image: null
  }),
  mounted() {
    this.image = require(`@/assets/${this.name}`);
  }
});
</script>

<style></style>
