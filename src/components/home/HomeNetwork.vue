<template>
  <div class="section py-20 bg-[#F2F2F2]">
    <div class="container">
      <div class="text-center">
        <h3 class="font-medium text-primary text-xl lg:text-3xl mb-4" data-aos="fade">
          Our Network
        </h3>
        <p class="text-priText" data-aos="fade-up">
          Be inspired by our great network of students and teachers.
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center mt-14 max-w-[1000px] mx-auto"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          class="network-card p-5 text-center w-[200px] m-1"
          data-aos="zoom-in"
        >
          <p class="text-[#242424] lg:text-3xl font-semibold mb-2">{{ item.stat }}</p>
          <p class="text-[#242424]">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    stat: '10,000+',
    title: 'Students'
  },
  {
    stat: '12',
    title: 'Faculties'
  },
  {
    stat: '50+',
    title: 'Departments'
  }
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
