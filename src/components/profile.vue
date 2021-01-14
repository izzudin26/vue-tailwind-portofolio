<template>
  <div id="profile">
    <div
      id="desk"
      class="desk-bg absolute"
      :style="{ backgroundImage: `url('${image}')` }"
    >
      <div
        class="md:mt-44 md:mx-52 lg:mx-52 sm:mx-10 xs:mx-4 sm:mt-40 xs:mt-44 shadow-md flex flex-col bg-white bg-opacity-100 rounded-2xl p-10 overflow-visible box-content align-middle justify-center"
      >
        <div
          class="mx-auto rounded-full w-44 justify-centerborder-4 border-primary-100 border-opacity-100"
        >
          <img
            :src="photo"
            class="photo transform transition hover:scale-110 duration-150 pa-2"
          />
        </div>
        <span
          class="text-3xl transition transform hover:scale-110 duration-500 hover:text-primary-600 mt-3"
          >{{ name }}</span
        >
        <span
          class="text-base hover:text-primary-600 duration-500 transition transform ease-in-out hover:scale-110"
          >🚀{{ word }}🚀</span
        >
      </div>
      <a href="#about">
        <svg
          class="animate-bounce mx-auto mt-10 hover:text-primary-600"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <About />
      <Skills />
      <Projects />
    </div>
  </div>
</template>

<script>
import About from "@/components/about.vue";
import Skills from "@/components/skills.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "Aboutme",
  components: {
    About,
    Skills,
    Projects
  },
  data: () => ({
    image: require("@/assets/desk.jpg"),
    photo: require("@/assets/photo.jpg"),
    name: "IZZUDIN AR RAFIQ",
    word:
      "A Dreamer love technology, building things, problem solving and helping people"
  })
};
</script>

<style>
.photo {
  border-radius: 50%;
}

.desk-bg {
  left: 0px;
  top: 0px;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}
</style>
