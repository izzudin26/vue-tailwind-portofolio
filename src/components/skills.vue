<template>
  <div
    id="skills"
    class="transition transform rounded-2xl flex flex-col-reverse md:flex-row"
  >
    <div
      class="flex justify-center p-5 w-full h-1/2 my-auto bg-purples rounded-r-2xl mr-20"
    >
      <div v-if="skills.length == 0" class="mx-auto my-auto w-full">
        <Loading-animation />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 w-full bg-purples">
        <div
          class="col-span-1 md:col-span-2 text-center font-bold text-white text-xl"
        >
          SKILLS
          <div class="bg-white h-1 w-1/12 rounded-full mx-auto"></div>
        </div>
        <div
          v-for="(skill, i) in skills"
          :key="i"
          data-aos="fade-up"
          class="text-left cursor-pointer p-5 px-10 hover:text-primary-500hover:scale-105 duration-500 transform transition"
        >
          <span class="font-sans text-base font-semibold text-white">{{
            skill.name
          }}</span>
          <div class="mx-auto my-auto w-full">
            <div class=" w-full bg-primary-500 rounded-full">
              <div
                class="bg-white h-2.5 w-full rounded-full text-xs leading-none py-1 text-center text-white"
                :style="`width: ${skill.value}%`"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Illustration name="skills.jpg" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { skills, SkillsModel } from "@/webservices/spreadsheet";
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
