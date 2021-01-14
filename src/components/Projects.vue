<template>
  <div
    id="Project"
    class="md:mx-20 xs:mx-6 sm:mx-10 mt-12 shadow-md p-5 transition transform rounded-2xl hover:scale-105 duration-500"
  >
    <span class="mx-auto text-2xl capitalize font-bold mt-3">Project</span>
    <div class="flex flex-col justify-start align-middle">
      <img
        :src="image"
        class="mx-auto my-auto md:w-96 lg:w-96 xs:w-80 sm:w-80"
        alt=""
      />
      <div v-if="projects.length == 0" class="mx-auto my-auto">
        <Loading-animation />
      </div>
      <div
        v-else
        class="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
      >
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="justify-items-start text-left p-3 transform transition hover:scale-105 duration-500"
        >
          <div
            class="flex flex-col rounded-lg border-2 hover:border-primary-400"
          >
            <div class="">
              <div class="text-sm ml-3 font-sans p-3 my-auto">
                {{ project.name }}
                <span
                  class="text-xs bg-primary-600 rounded-md p-1 px-2 text-white"
                  >{{ project.platform }}</span
                >
              </div>
            </div>
            <div class="flex mx-4 flex-wrap rounded-b-md">
              <span
                v-for="tag of project.tag"
                :key="tag"
                class="p-2 m-2 hover:text-white cursor-pointer hover:bg-primary-500 text-xs font-black bg-gray-300 rounded-lg text-center"
              >
                {{ tag }}
              </span>
            </div>
            <div class="flex justify-between mx-5 py-1">
              <button
                @click="openUrl(project.repository)"
                class="flex flex-row hover:text-white hover:bg-primary-500 p-2 rounded-md focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Repository</span>
              </button>
              <button
                class="flex flex-row hover:text-white hover:bg-primary-500 p-2 rounded-md focus:outline-none"
                v-if="project.link"
                @click="openUrl(project.link)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="w-5 h-5"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-2">Visit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { projects, ProjectsModel } from "@/webservices/spreadsheet.ts";
export default Vue.extend({
  data: () => ({
    projects: [] as ProjectsModel[],
    image: require("@/assets/project.jpg")
  }),
  methods: {
    openUrl(url: string) {
      window.open(url);
    }
  },
  mounted() {
    projects
      .getProjects()
      .then(res => {
        this.projects = res;
        console.log(res);
      })
      .catch(err => console.log(err));
  }
});
</script>

<style></style>
