<template>
  <div id="Project" class="space-y-12 py-10 px-6 md:px-10 flex flex-col">
    <div class="space-y-2 mx-auto" data-aos="fade-up">
      <h2 class="font-bold text-purples text-2xl">Portfolio</h2>
      <div class="h-1 w-full rounded-full bg-purples"></div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
      <div
        v-for="(image, i) in images"
        :key="i"
        class="md:mx-20 md:my-8 hover:scale-105 transform duration-200"
      >
        <a :href="image.url" target="_blank">
          <img
            :src="image.image"
            class="rounded-lg shadow-lg"
            data-aos="fade-up"
        /></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    images: [
      {
        url: "https://istilahtify.vercel.app/",
        image: require("@/assets/projects/istilahtify.webp")
      },
      {
        url: "https://izzudin26.github.io/quran/",
        image: require("@/assets/projects/quran.webp")
      },
      {
        url: "https://izzudin26.github.io/todo/",
        image: require("@/assets/projects/todo.webp")
      },
      {
        url: "https://urlshorter26.herokuapp.com/",
        image: require("@/assets/projects/url-shortner.webp")
      },
      {
        image: require("@/assets/projects/wikibook.webp"),
        url:
          "https://drive.google.com/file/d/1hB8u6giRl5uLeLWPch_orQFcV_f-jgdg/view?usp=sharing"
      },
      {
        url:
          "https://drive.google.com/file/d/1hBd6ORG9MIqGJok1fFCTpab8mWRAtYAf/view?usp=sharing",
        image: require("@/assets/projects/todo-Flutter.webp")
      }
    ]
  })
});
</script>

<style></style>
