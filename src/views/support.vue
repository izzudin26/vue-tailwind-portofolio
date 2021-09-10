<template>
  <div
    class=" my-10 flex flex-col md:flex-row justify-center items-center text-center space-y-5 md:space-y-0 md:space-x-20"
  >
    <img
      :src="image"
      class="w-56 rounded-xl block transform transition-all duration-1000"
      :class="displayImage ? 'scale-100' : 'scale-0'"
      alt=""
    />
    <div
      class="flex flex-col w-1/2 md:w-1/4 justify-center space-y-5 items-center transform transition-all duration-1000"
      :class="displayImage ? 'opacity-100' : 'opacity-0'"
    >
      <div
        class="flex flex-col md:flex-row space-y-2 md:space-y-0 mb-10 md:space-x-5 w-full"
      >
        <button
          @click="paymentMethod = 'service'"
          class="py-1 px-2 shadow-md w-full block rounded-md border-2 focus:outline-none hover:border-primary-600 font-bold transform  transition-colors duration-500"
          :class="
            paymentMethod == 'service'
              ? 'bg-primary-600 border-primary-600 text-white scale-105'
              : 'border-white'
          "
        >
          Pay for Service
        </button>
        <button
          @click="paymentMethod = 'donation'"
          class="py-1 px-2 w-full shadow-md block rounded-md border-2 focus:outline-none hover:border-primary-600 transform font-bold transition-colors duration-500"
          :class="
            paymentMethod == 'donation'
              ? 'bg-primary-600 border-primary-600 text-white scale-105'
              : 'border-white'
          "
        >
          Donation
        </button>
      </div>
      <div
        class="flex flex-row group w-full border-b-2 focus-within:border-black transform transition-colors duration-500"
      >
        <span class="group group-focus:font-semibold">Rp.</span>
        <input
          required
          type="text"
          class="my-auto w-full mx-2 py-1 font-semibold focus:outline-none"
          placeholder="Jumlah Donasi"
        />
      </div>
      <input
        type="text"
        class="border-b-2  focus:border-black w-full py-1 font-semibold focus:outline-none transform transition-colors duration-500"
        placeholder="Nama Kamu"
      />
      <input
        type="email"
        class="border-b-2 focus:border-black w-full py-1 font-semibold focus:outline-none transform transition-colors duration-500"
        placeholder="Email"
      />
      <textarea
        class="w-full border-b-2 font-semibold focus:border-black focus:outline-none transform transition-colors duration-500"
        rows="3"
        v-model="feedbackMessage"
        :placeholder="paymentMethod == 'service' ? 'Feedback' : 'Pesan'"
      ></textarea>
      <div
        class="flex flex-col border-b-2 font-semibold text-left focus:border-black w-full p-2"
      >
        E-Wallet:
        <div
          class="p-3 justify-center w-full items-center grid grid-cols-1 md:grid-cols-3 mx-auto space-y-2 space-x-2"
        >
          <button
            @click="paymentMethod = 'ID_OVO'"
            class="p-3 focus:outline-none hover:border-primary-500 border-2 border-white rounded-lg transition-colors duration-500"
            :class="paymentMethod == 'ID_OVO' && 'bg-gray-300'"
          >
            <img src="/icon/ovo.png" class="" alt="" />
          </button>
          <button
            @click="paymentMethod = 'ID_LINKAJA'"
            class="p-3 focus:outline-none hover:border-primary-500 border-2 border-white rounded-lg transition-colors duration-500"
            :class="paymentMethod == 'ID_LINKAJA' && 'bg-gray-300'"
          >
            <img src="/icon/linkaja.png" class="my-auto" alt="" />
          </button>
          <button
            @click="paymentMethod = 'ID_DANA'"
          
            class="p-3 focus:outline-none hover:border-primary-500 border-2 border-white rounded-lg transition-colors duration-500"
                        :class="paymentMethod == 'ID_DANA' && 'bg-gray-300'"

          >
            <img src="/icon/dana.png" class="" alt="" />
          </button>
        </div>
      </div>
      <button
        class="py-2 font-semibold focus:outline-none text-center shadow-md w-full"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Support",
  data: () => ({
    image: require("@/assets/photo-blue.jpg"),
    displayImage: false,
    paymentMethod: null,
    feedbackMessage: "",
  }),
  mounted() {
    setTimeout(() => {
      this.displayImage = true;
    }, 100);
  },
};
</script>

<style>
textarea {
  resize: none;
}
</style>
