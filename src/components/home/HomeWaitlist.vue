<template>
  <div class="section bg-primary text-white relative z-40">
    <div class="container">
      <div
        class="flex flex-col justify-center items-center text-center max-w-[569px] mx-auto"
      >
        <h2 class="font-medium text-xl lg:text-3xl mb-4" data-aos="fade">
          Join The Waitlist
        </h2>
        <p class="lg:text-xl" data-aos="fade-up">
          Be among the first to experience when we go live!
        </p>
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-3 mt-14 w-full"
          data-aos="fade-up"
        >
          <input
            type="text"
            placeholder="Email Address"
            class="h-[44px] border border-white rounded-lg text-whit bg-transparent placeholder:text-white p-4 w-full lg:basis-[70%]"
          />
          <BaseButton
            label="Subscribe"
            class="h-[44px] px-4 lg:px-10 py-3.5 w-full lg:basis-[30%]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
