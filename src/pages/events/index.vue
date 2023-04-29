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
  <TheFooter />
</template>

<script setup lang="ts"></script>

<style scoped></style>
