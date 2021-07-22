<template>
  <div id="profile">
    <div
      class="flex relative h-44 overflow-visible bg-purples bg-opacity-100 w-full mb-32"
    >
      <div
        class="justify-center flex-col md:flex-row flex mx-auto md:py-24 py-56"
      >
        <div
          class="mx-auto rounded-full w-44 justify-centerborder-4 border-primary-100 border-opacity-100"
        >
          <img
            :src="photo"
            class="photo rounded-xl border-4 border-white transform transition hover:scale-110 duration-150 pa-2 shadow-md"
          />
        </div>
        <div
          class="flex flex-col mx-10 pt-7 text-center md:text-left space-y-2"
        >
          <span
            class="text-3xl transition transform hover:scale-110 duration-500 md:text-white mt-3 filter drop-shadow-lg text-black font-bold"
            >{{ name }}</span
          >
          <span
            class="text-base font-semibold hover:text-primary-600 duration-500 transition transform ease-in-out hover:scale-110"
            >🚀{{ word }}🚀</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Aboutme",

  data: () => ({
    image: require("@/assets/desk.jpg"),
    photo: require("@/assets/photo.jpg"),
    name: "IZZUDIN AR RAFIQ",
    word:
      "A Dreamer love technology, building things, problem solving and helping people"
  })
};
</script>
