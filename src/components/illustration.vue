<template>
  <img
    :src="image"
    class="mx-auto my-auto md:w-96 lg:w-96 xs:w-80 sm:w-80"
    data-aos="fade-up"
    alt=""
    @click="openCredit"
  />
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["name", "credit"],
  data: () => ({
    image: null
  }),
  mounted() {
    this.image = require(`@/assets/${this.name}`);
  },
  methods: {
    openCredit() {
      this.credit != null ? window.open(this.credit) : null;
    }
  }
});
</script>

<style></style>
