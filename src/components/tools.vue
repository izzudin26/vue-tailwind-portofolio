<template>
  <div
    id="tools"
    class="bg-gray-100 space-y-12 py-10 px-6 md:px-10 justify-center align-center"
  >
    <div class="text-center font-bold text-purples text-2xl" data-aos="fade-up">
      Tools and Technologies
      <div class="bg-purples w-1/6 h-1 rounded-full mx-auto mt-2"></div>
    </div>
    <div class="grid grid-flow-col-dense grid-rows-1 mx-auto">
      <img
        data-aos="fade-up"
        v-for="(image, i) in techs"
        :key="i"
        :src="image"
        class="w-14 mx-auto"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Tools",
  data: () => ({
    techs: [
      "https://cdn.iconscout.com/icon/free/png-512/docker-226091.png",
      "https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png",
      "https://www.labkommat-unm.net/wp-content/uploads/2020/03/1200px-Visual_Studio_Code_1.35_icon.svg_.png",
      "https://docs.nestjs.com/assets/logo-small.svg",
      "https://image.flaticon.com/icons/png/512/25/25231.png",
      "https://cdn.iconscout.com/icon/free/png-512/vue-282497.png",
      "https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png",
      "https://cdn.iconscout.com/icon/free/png-512/flutter-2038877-1720090.png"
    ]
  })
};
</script>

<style></style>
