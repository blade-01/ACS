<template>
  <div class="section py-20 bg-white">
    <div class="container">
      <div class="text-center">
        <h4 class="font-medium text-primary text-xl lg:text-3xl mb-4" data-aos="fade">
          Partners & Sponsors
        </h4>
        <p class="text-priText" data-aos="fade-up">
          Be inspired by our great network of students and teachers.
        </p>
      </div>
      <div
        class="flex flex-wrap gap-8 justify-center items-center max-w-[1000px] mx-auto mt-14"
      >
        <img
          v-for="(item, index) in items"
          :key="index"
          :src="`/img/${item}`"
          class="basis-[20%]"
          data-aos="zoom-in"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  'partner-01.svg',
  'partner-02.svg',
  'partner-03.svg',
  'partner-04.svg',
  'partner-05.svg',
  'partner-06.svg',
  'partner-07.svg',
  'partner-08.svg'
]
</script>

<style scoped>
.network-card {
  background: linear-gradient(
    120.67deg,
    rgba(219, 219, 219, 0.15) 0%,
    rgba(188, 188, 188, 0.5) 100%
  );
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
}
</style>
