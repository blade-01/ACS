<template>
  <div class="lg:flex lg:mt-[78px] h-[calc(100vh-78px)] overflow-hidden">
    <div class="container">
      <div
        class="lg:w-[45%] flex flex-col justify-center items-center h-screen lg:h-auto"
      >
        <div>
          <h1
            class="font-bold text-center lg:text-left text-[32px] leading-[48px] lg:text-[48px] lg:leading-[59px] text-tittleText"
            data-aos="fade-down"
          >
            Academic Counseling Seminar (<span class="text-primary">A</span>
            <span class="text-secondary">C</span>
            <span class="text-primary">S</span>)
          </h1>
          <p
            class="leading-[24px] tracking-[0.7rem] font-semibold lg:text-2xl text-center mt-20 text-primary"
            data-aos="fade"
            data-aos-delay="500"
          >
            ARRIVING IN
          </p>
        </div>
        <hr class="border-[#E4E4E4] my-[48px] w-full" />
        <div class="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <div class="main-card bg-primary" data-aos="zoom-in" data-aos-delay="800">
            <p class="text-xl lg:text-[40px] font-semibold">20</p>
            <hr class="border-white my-4" />
            <p class="lg:text-xl font-medium">days</p>
          </div>
          <div class="bg-secondary main-card" data-aos="zoom-in" data-aos-delay="800">
            <p class="text-xl lg:text-[40px] font-semibold">13</p>
            <hr class="border-white my-4" />
            <p class="lg:text-xl font-medium">hrs</p>
          </div>
          <div class="main-card bg-primary" data-aos="zoom-in" data-aos-delay="800">
            <p class="text-xl lg:text-[40px] font-semibold">26</p>
            <hr class="border-white my-4" />
            <p class="lg:text-xl font-medium">mins</p>
          </div>
          <div class="main-card bg-secondary" data-aos="zoom-in" data-aos-delay="800">
            <p class="text-xl lg:text-[40px] font-semibold">26</p>
            <hr class="border-white my-4" />
            <p class="lg:text-xl font-medium">secs</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute right-0 top-0 w-[55%] overflow-hidden hidden lg:flex justify-center items-center clip-path"
    >
      <img
        src="/img/nav-arrow.svg"
        alt="navigation arrow"
        class="cursor-pointer absolute top-1/2 -translate-y-1/2 right-10 z-50"
        @click="next"
      />
      <Carousel ref="carousel" :settings="settings">
        <slide v-for="img in images" :key="img">
          <div class="carousel__item flex flex-col justify-center items-center">
            <img fetchpriority="high" :src="img" alt="illustration_01" />
          </div>
        </slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
  wrapAround: true
})
const images = [
  'https://engineering.tamu.edu/student-life/_files/_images/_feature-images/speaker-talk-11Oct2018.jpg',
  'https://engineering.tamu.edu/student-life/_files/_images/_feature-images/speaker-talk-11Oct2018.jpg',
  'https://engineering.tamu.edu/student-life/_files/_images/_feature-images/speaker-talk-11Oct2018.jpg'
]
const carousel = ref<any>(null)
const next = () => {
  carousel.value.next()
}
</script>

<style scoped>
.clip-path {
  clip-path: polygon(45% 0, 100% 0%, 100% 100%, 0% 100%);
}
@screen lg {
  .clip-path::after,
  .clip-path::before {
    @apply content-[''] bg-[#ffffff] opacity-60 h-full w-[30px] absolute -bottom-4 left-[7.5rem] rotate-[16deg] z-30 overflow-hidden;
  }
  .clip-path::before {
    @apply bg-[#ffffff] opacity-40 left-[9.45rem];
  }
}

@screen xl {
  .clip-path::after,
  .clip-path::before {
    @apply left-[9.5rem] rotate-[21deg] z-30 overflow-hidden;
  }
  .clip-path::before {
    @apply left-[11.5rem];
  }
}

@screen 1xl {
  .clip-path::after,
  .clip-path::before {
    @apply left-[10.5rem] rotate-[22.5deg] z-30 overflow-hidden;
  }
  .clip-path::before {
    @apply left-[12.5rem];
  }
}

:deep(.carousel__item) {
  margin: 0 0 24px;
  color: #ffffff !important;
  text-align: center !important;
  position: relative;
}
:deep(.carousel__item img) {
  height: 100vh !important;
  overflow: hidden;
  object-fit: cover;
}

:deep(.carousel__pagination) {
  gap: 12px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
}
:deep(.carousel__pagination-button) {
  background: #8f8f8f !important;
  border-radius: 100%;
  height: 16px;
  width: 16px;
}
:deep(.carousel__pagination-button::after) {
  display: none;
}
:deep(.carousel__pagination-button--active) {
  background: #ffffff !important;
}

.main-card {
  @apply rounded-[20px] py-6 px-8  text-white text-center w-[112px];
}
</style>
