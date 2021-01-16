<template>
  <div
    id="about"
    class="rounded-2xl p-5 transform transition hover:scale-105 duration-500 shadow-md md:mx-20 xs:mx-6 sm:mx-10 align-middle flex sm:flex-col xs:flex-col md:flex-row lg:flex-row justify-center mt-6"
  >
    <Illustration name="self.jpg" />
    <div class="mx-auto my-auto sm:mx-10 text-center px-3">
      <p class="md:text-lg sm:text-base xs:text-base text-justify">
        My name is Izzudin Ar Rafiq, i'm student Islam University Lamongan, i've
        big motivation to gain and learn new knowledge specially technology. I
        love programming, and problem solving. I've programming experience last
        2 years with fullstack javascript. I hope i can help people and fixing
        world with Code
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
