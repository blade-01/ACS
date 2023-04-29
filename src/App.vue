<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css";
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: "ACS",
  meta: [
    {
      name: "description",
      content: "Academic Counseling Seminar (ACS)",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
});
AOS.init({
  duration: 800,
  once: false,
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
