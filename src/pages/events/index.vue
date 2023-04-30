<template>
  <TheHeader />
  <div
    class="routes bg-[url('/img/event-banner.svg')] bg-no-repeat bg-center bg-cover h-[500px] relative"
  >
    <div class="container flex justify-end">
      <BaseButton label="RSVP" class="bg-primary w-[164px] text-2xl mt-10" />
    </div>
    <img
      src="/img/play-btn.svg"
      alt="play button"
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      width="130"
      height="130"
    />
  </div>
  <div class="section">
    <div class="container">
      <div
        class="flex justify-center items-center flex-col md:flex-row gap-8 md:justify-between"
      >
        <div
          class="custom-shadow rounded-sm flex justify-between items-center md:basis-[70%] p-1.5 m-1 md:px-[28px] md:py-[18px]"
        >
          <div class="flex items-center gap-2" v-for="{ icon, title, body } in details">
            <Icon :icon="icon" width="15" class="text-[#979797]" />
            <div>
              <p class="text-[#979797] leading-3 text-[8px] sm:text-base">
                {{ title }}
              </p>
              <p class="font-semibold text-[9px] sm:text-base leading-3">
                {{ body }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-between gap-8 md:justify-start md:basis-[30%]">
          <div
            class="flex justify-between items-center gap-2"
            v-for="{ title, src, org } in speakers"
          >
            <img :src="`/img/${src}`" alt="speaker" class="rounded-lg" />
            <div>
              <img :src="`/img/${org}`" alt="logo" width="77" height="28" />
              <p class="text-xs mt-2">{{ title }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16">
        <p class="text-xl lg:text-3xl font-bold">Academic Counseling Seminar</p>
        <p class="text-lg lg:text-xl mt-8">
          The academic counseling seminar, with all indications, it is the biggest
          students-driven academic events across all tertiary institutions worldwide. It
          is an event geared towards addressing stubborn and contemporary academic
          problems amongst Nigerian students .It takes form of identifying grey areas in
          academic and finding last-longing solutions to them.it involves rising academic
          problems and providing comprehensive answers. Not only does ACS masterly bring
          about the above, ut also does admit scholarship programmes. This in a bid to
          reward academic excellence and intellectual brilliance. <br />
          <br />
          An annual event that addresses the academic challenge in Nigeria and awards
          outstanding academic Students so as to encourage others to do betters.
        </p>
        <BaseButton
          label="Register"
          class="bg-primary w-[200px] mt-10 text-2xl font-semibold py-6"
        />
      </div>
      <div class="mt-20">
        <div class="flex justify-between items-center">
          <p class="text-xl lg:text-3xl font-bold mb-8">Upcoming Seminar</p>
          <RouterLink to="/events/all-events">View All</RouterLink>
        </div>
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
import { Icon } from "@iconify/vue";
useHead({
  title: "Academic Counseling Seminar (ACS) Events",
  meta: [{ name: "description", content: "Academic Counseling Seminar (ACS)." }],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
  ],
});
const details = [
  {
    icon: "mdi:clock-time-eight-outline",
    title: "Time",
    body: "19:00AM",
  },
  {
    icon: "mdi:map-marker-outline",
    title: "Location",
    body: "Islamic Centre Hall",
  },
  {
    icon: "mdi:calendar-month-outline",
    title: "Date",
    body: "10 February ,2023",
  },
  {
    icon: "mdi:currency-usd-circle-outline",
    title: "Price",
    body: "Free",
  },
];
const speakers = [
  {
    title: "Organiser",
    src: "spk-01.svg",
    org: "logo.svg",
  },
  {
    title: "Speaker",
    src: "spk-02.svg",
    org: "logo.svg",
  },
];
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
];
</script>

<style scoped>
.custom-shadow {
  box-shadow: -7.32961px -7.32961px 15.5754px rgba(0, 0, 0, 0.02),
    7.32961px 7.32961px 14.6592px rgba(0, 0, 0, 0.1);
}
.seminar {
  background: rgba(255, 255, 255, 0.64);
  backdrop-filter: blur(21.7514px);
}
</style>
