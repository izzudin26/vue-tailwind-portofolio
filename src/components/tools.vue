<template>
  <div
    id="tools"
    class="bg-gray-100 space-y-12 py-10 px-6 md:px-10 justify-center align-center flex flex-col"
  >
    <div class="space-y-2 mx-auto" data-aos="fade-up">
      <h2 class="font-bold text-purples text-2xl">Tools and Technologies</h2>
      <div class="w-full mx-auto h-1 rounded-full bg-purples mt-2"></div>
    </div>
    <div
      class="grid w-full grid-cols-6 gap-4 mx-auto justify-center align-center"
    >
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
      "https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png",
      "https://cdn.iconscout.com/icon/free/png-512/docker-226091.png",
      "https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png",
      "https://docs.nestjs.com/assets/logo-small.svg",
      "https://image.flaticon.com/icons/png/512/25/25231.png",
      "https://cdn.iconscout.com/icon/free/png-512/vue-282497.png",
      "https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png",
      "https://cdn.iconscout.com/icon/free/png-512/flutter-2038877-1720090.png",
      "https://toppng.com/uploads/preview/mysql-logo-vector-free-download-11573934106vmvysk1ovw.png",
      "https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png",
      "https://w7.pngwing.com/pngs/262/242/png-transparent-nginx-phusion-passenger-application-software-proxy-server-reverse-proxy-creativo-logo-de-marca-angle-text-trademark.png"
    ]
  })
};
</script>

<style></style>
