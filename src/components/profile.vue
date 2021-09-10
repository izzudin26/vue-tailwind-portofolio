<template>
  <div id="profile">
    <div
      class="flex relative h-44 overflow-visible bg-purples bg-opacity-100 w-full md:mb-28 mb-56 transform transition-all duration-1000"
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
          <div
            class="flex flex-col md:flex-row flex-wrap space-y-4 md:space-x-8 md:space-y-0"
          >
            <h2
              class="font-bold text-purples text-lg transform ease-in-out hover:scale-110 hover:text-purples duration-500 transition"
            >
              🚀{{ word }}🚀
            </h2>
            <div class="flex flex-row mx-auto p-1 space-x-4">
              <a href="https://github.com/izzudin26" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="47"
                  fill="currentColor"
                  class="text-gray-500 w-7 h-7 hover:text-black"
                  viewBox="0 0 48 47"
                >
                  <path
                    fill-rule="evenodd"
                    d="M723.999 560C710.745 560 700 570.787 700 584.097c0 10.644 6.876 19.675 16.414 22.861 1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.663-3.525-2.663-3.525-2.18-1.495.165-1.465.165-1.465 2.407.17 3.674 2.483 3.674 2.483 2.143 3.683 5.618 2.62 6.986 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.015-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.239 6.377 1.538 1.685 2.467 3.835 2.467 6.466 0 9.256-5.611 11.293-10.957 11.89.86.744 1.629 2.213 1.629 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C741.13 603.763 748 594.738 748 584.097c0-13.31-10.746-24.097-24.001-24.097"
                    transform="translate(-700 -560)"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/izzudin-ar-rafiq-0640101b5/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="currentColor"
                  class="w-7 h-7 text-gray-500 hover:text-primary-500"
                >
                  <path
                    d="M3019.728,198.651 L2993.531,198.651 C2990.072,198.651 2987.258,195.843 2987.258,192.391 L2987.258,166.26 C2987.258,162.808 2990.072,160 2993.531,160 L3019.728,160 C3023.186,160 3026,162.808 3026,166.26 L3026,192.392 C3026,195.844 3023.186,198.651 3019.728,198.651 Z M3000.34908,191.953213 L3000.35688,191.953213 L3000.35688,175.281347 L2995.17129,175.281347 L2995.17129,191.953213 L3000.34908,191.953213 Z M2997.76018,173.004367 C2999.42113,173.004367 3000.76237,171.663132 3000.76237,170.002183 C3000.76237,168.349033 2999.41333,167 2997.76018,167 C2996.09924,167 2994.758,168.349033 2994.758,170.002183 C2994.758,171.655334 2996.09924,173.004367 2997.76018,173.004367 Z M3019.758,191.953213 L3019.758,182.814099 C3019.758,178.32252 3018.78327,174.86806 3013.54309,174.86806 C3011.02438,174.86806 3009.33224,176.248284 3008.63822,177.558328 L3008.56804,177.558328 L3008.56804,175.281347 L3003.60079,175.281347 L3003.60079,191.953213 L3008.77859,191.953213 L3008.77859,183.703057 C3008.77859,181.527449 3009.19187,179.422021 3011.88994,179.422021 C3014.54122,179.422021 3014.58021,181.909545 3014.58021,183.843419 L3014.58021,191.953213 L3019.758,191.953213 Z"
                    transform="translate(-2987 -160)"
                  />
                </svg>
              </a>
              <a href="mailto:izzudin.ar26@gmail.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 my-auto text-gray-500 hover:text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
              </a>
              <a href="https://resume.io/r/GViEzdsuE" class="font-bold text-xl text-gray-500 hover:text-primary-500" target="_blank">
               Resume
              </a>
            </div>
          </div>
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
    photo: require("@/assets/photo-blue.jpg"),
    name: "IZZUDIN AR RAFIQ",
    word: "Junior Fullstack Developer"
  })
};
</script>
