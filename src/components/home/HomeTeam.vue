<template>
  <div class="section py-20">
    <div class="container">
      <div class="text-center max-w-[650px] mx-auto">
        <h5 class="font-medium text-xl lg:text-3xl mb-4 text-primary" data-aos="fade">
          The Planning Team
        </h5>
        <p class="text-priText" data-aos="fade-up">
          We have a well-curated list of speakers to brighten your experience at ACS. Come
          one, come all!
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mx-auto mt-[100px]"
      >
        <div
          class="flex flex-col gap-2 justify-center items-center text-center"
          data-aos="zoom-in"
          v-for="(item, index) in items"
          :key="index"
        >
          <img :src="`/img/${item.src}`" class="basis-[20%]s mb-2" />
          <p class="font-semibold 1xl:text-xl text-[#242424]">{{ item.name }}</p>
          <p class="font-medium 1xl:text-lg max-w-[300px] text-[#999999]">
            {{ item.role }}
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <BaseButton
          label="Meet the Team"
          class="lg:px-[70px] mt-[100px]"
          data-aos="fade-up"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    src: 'speaker-01.png',
    name: 'Abdullah Sulaiman',
    role: 'Senior Advocate at MSSN Lagos, Nigeria.'
  },
  {
    src: 'speaker-02.png',
    name: 'Mariam Lawal',
    role: 'Senior Advocate at MSSN Lagos, Nigeria.'
  },
  {
    src: 'speaker-03.png',
    name: 'Abdullah Sulaiman',
    role: 'Senior Advocate at MSSN Lagos, Nigeria.'
  },
  {
    src: 'speaker-04.png',
    name: 'Mariam Lawal',
    role: 'Senior Advocate at MSSN Lagos, Nigeria.'
  },
  {
    src: 'speaker-05.png',
    name: 'Abdullah Sulaiman',
    role: 'Senior Advocate at MSSN Lagos, Nigeria.'
  },
  {
    src: 'speaker-06.png',
    name: 'Mariam Lawal',
    role: 'Senior Advocate at MSSN Lagos, Nigeria.'
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
