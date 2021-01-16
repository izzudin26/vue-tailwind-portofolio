<template>
  <div
    id="skills"
    class="md:mx-20 xs:mx-6 sm:mx-10 mt-12 shadow-md p-5 transition transform rounded-2xl hover:scale-105 duration-500"
  >
    <span class="mx-auto text-2xl capitalize font-bold mt-3">Skills</span>

    <div
      class="flex md:flex-nowrap lg:flex-nowrap xs:flex-wrap-reverse sm:flex-wrap-reverse mx-auto justify-center"
    >
      <div v-if="skills.length == 0" class="mx-auto my-auto">
        <Loading-animation />
      </div>
      <div
        v-else
        class="grid md:grid-cols-2 lg:md:grid-cols-2 sm:md:grid-cols-1 xs:grid-cols-1 w-full mx-10 "
      >
        <div
          v-for="(skill, i) in skills"
          :key="i"
          class="justify-items-start text-left cursor-pointer p-5 hover:text-primary-500 hover:scale-105 duration-500 transform transition"
        >
          <span class="font-sans text-sm font-medium">{{ skill.name }}</span>
          <div class="mx-auto my-auto flex flex-wrap w-full">
            <div class="shadow-sm w-full bg-gray-200 rounded-full">
              <div
                class="bg-primary-500 h-2.5 rounded-full text-xs leading-none py-1 text-center text-white"
                :style="`width: ${skill.value}%`"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Illustration name="skills.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { skills, SkillsModel } from "@/webservices/spreadsheet.ts";
export default Vue.extend({
  data: () => ({
    skills: [] as SkillsModel[]
  }),
  mounted() {
    skills
      .getSkills()
      .then(res => {
        this.skills = res;
      })
      .catch(err => console.log(err));
  }
});
</script>

<style></style>
