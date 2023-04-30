<template>
  <TheHeader />
  <div class="routes section">
    <div class="container">
      <div>
        <p class="text-xl lg:text-3xl font-bold mb-10">Past Seminars</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div v-for="{ src, title } in seminars" class="relative">
            <img :src="`/img/${src}`" :alt="title" class="w-full" />
            <div
              class="absolute bottom-6 left-1/2 -translate-x-1/2 p-4 rounded-[18px] seminar flex justify-between items-center w-[90%] text-white"
            >
              <div>
                <p class="font-extrabold text-xl mb-3">{{ title }}</p>
                <p class="text-[9px] leading-3">
                  The academic counselling seminar. <br />
                  The academic counselling seminar.....
                </p>
              </div>
              <img src="/img/tag.svg" alt="tag" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20">
        <p class="text-xl lg:text-3xl font-bold mb-10">Upcoming Seminars</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <div v-for="{ src, title } in seminars" class="relative">
            <img :src="`/img/${src}`" :alt="title" class="w-full" />
            <div
              class="absolute bottom-6 left-1/2 -translate-x-1/2 p-4 rounded-[18px] seminar flex justify-between items-center w-[90%] text-white"
            >
              <div>
                <p class="font-extrabold text-xl mb-3">{{ title }}</p>
                <p class="text-[9px] leading-3">
                  The academic counselling seminar. <br />
                  The academic counselling seminar.....
                </p>
              </div>
              <img src="/img/tag.svg" alt="tag" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20">
        <p class="text-xl lg:text-3xl font-bold mb-8">Blogs</p>
        <div class="relative text-white hidden lg:block">
          <img src="/img/blog-banner.svg" alt="blog banner" class="w-full" />
          <p class="absolute bottom-6 left-6">
            "Charity does not decrease wealth." - Sahih Muslim 2588
          </p>
        </div>
        <div class="relative text-white lg:hidden">
          <img src="/img/m-blog-banner.svg" alt="blog banner" class="w-full" />
          <p class="absolute bottom-6 left-6">
            "Charity does not decrease wealth." - Sahih Muslim 2588
          </p>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
</template>

<script setup lang="ts">
useHead({
  title: "Academic Counseling Seminar (ACS) All Events",
  meta: [{ name: "description", content: "Academic Counseling Seminar (ACS)." }],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
});
const seminars = [
  {
    src: "sem-01.svg",
    title: "Sister”s Seminar",
  },
  {
    src: "sem-02.svg",
    title: "Da'wah Week",
  },
  {
    src: "sem-03.svg",
    title: "Da'wah Camp",
  },
  {
    src: "sem-04.svg",
    title: "Public Lectures",
  },
  {
    src: "sem-01.svg",
    title: "Sister”s Seminar",
  },
  {
    src: "sem-02.svg",
    title: "Da'wah Week",
  },
  {
    src: "sem-03.svg",
    title: "Da'wah Camp",
  },
  {
    src: "sem-04.svg",
    title: "Public Lectures",
  },
  {
    src: "sem-01.svg",
    title: "Sister”s Seminar",
  },
  {
    src: "sem-02.svg",
    title: "Da'wah Week",
  },
  {
    src: "sem-03.svg",
    title: "Da'wah Camp",
  },
  {
    src: "sem-04.svg",
    title: "Public Lectures",
  },
];
</script>

<style scoped>
.seminar {
  background: rgba(255, 255, 255, 0.64);
  backdrop-filter: blur(21.7514px);
}
</style>
