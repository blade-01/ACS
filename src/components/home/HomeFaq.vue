<template>
  <div class="section py-20 scroll-mt-16" id="faq">
    <div class="container">
      <div class="text-center max-w-[650px] mx-auto">
        <h6 class="font-medium text-xl lg:text-3xl mb-4 text-primary" data-aos="fade">
          Frequently Asked Questions
        </h6>
        <p class="text-priText" data-aos="fade-up">Get answers to your questions here.</p>
      </div>
      <div class="mx-auto max-w-[990px] mt-[80px]">
        <div v-for="item in items" :key="item.id" class="mb-4" data-aos="zoom-in">
          <div
            class="flex justify-between items-center mb-2 cursor-pointer"
            @click="selected(item.id)"
          >
            <p class="font-semibold 1xl:text-xl text-[#272727] text-xl">
              {{ item.question }}
            </p>
            <Icon
              icon="mdi:chevron-down"
              width="30"
              class="cursor-pointer"
              :class="
                item.id === selectedId
                  ? 'transition-all ease-in-out duration-200 transform rotate-180 '
                  : ''
              "
            />
          </div>
          <div
            class="rounded-lg"
            :class="[
              item.id === selectedId
                ? 'max-h-[500px] transition-[max-height] ease-in duration-400 bg-white'
                : 'max-h-0 overflow-hidden transition-[max-height] ease-out duration-200 bg-[#FAFAFA]',
            ]"
          >
            <p class="font-medium 1xl:text-lg text-[#525252]">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
const items = [
  {
    id: Math.random().toString(36).substring(7).toUpperCase(),
    question: "Why do companies need a privacy policy?",
    answer:
      "Companies need a privacy policy because most countries have laws requiring privacy policies for websites and applications that gather personal data from users; businesses have them.",
  },
  {
    id: Math.random().toString(36).substring(7).toUpperCase(),
    question: "Why do companies need a privacy policy?",
    answer:
      "Companies need a privacy policy because most countries have laws requiring privacy policies for websites and applications that gather personal data from users; businesses have them.",
  },
  {
    id: Math.random().toString(36).substring(7).toUpperCase(),
    question: "Why do companies need a privacy policy?",
    answer:
      "Companies need a privacy policy because most countries have laws requiring privacy policies for websites and applications that gather personal data from users; businesses have them.",
  },
  {
    id: Math.random().toString(36).substring(7).toUpperCase(),
    question: "Why do companies need a privacy policy?",
    answer:
      "Companies need a privacy policy because most countries have laws requiring privacy policies for websites and applications that gather personal data from users; businesses have them.",
  },
];

const selectedId = ref("");
const selected = (id: any) => {
  if (selectedId.value === id) {
    selectedId.value = "";
  } else {
    selectedId.value = id;
  }
};
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
