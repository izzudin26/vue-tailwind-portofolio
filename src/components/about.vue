<template>
  <div id="about" class="rounded-2xl relative flex flex-col md:flex-row">
    <Illustration name="self.jpg" />
    <div
      class="flex my-auto text-center p-12 md:w-1/2 ml-20 rounded-l-2xl bg-purples"
      data-aos="fade-up"
    >
      <p class="text-lg font-semibold text-white text-justify">
        My name is Izzudin Ar Rafiq, i'm student Islam University Lamongan, i've
        big motivation to gain and learn new knowledge specially technology. I
        love programming, and problem solving.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "About"
});
</script>

<style></style>
