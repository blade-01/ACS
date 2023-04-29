<template>
  <div class="section lg:py-24 main-bg scroll-mt-16" id="about">
    <div class="container">
      <div class="max-w-[900px] mx-auto text-center mb-20">
        <h3 class="font-medium text-primary text-xl lg:text-3xl mb-4" data-aos="fade">
          ACS Agenda
        </h3>
        <p class="text-priText" data-aos="fade-up">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio numquam
          excepturi.
        </p>
      </div>
      <div>
        <p
          class="text-secondary relative after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-[100px] after:h-0.5 after:bg-secondary text-lg md:text-3xl inline"
          data-aos="fade-up"
        >
          OUR MISSION
        </p>
        <p
          class="lg:text-2xl text-priText lg:w-[800px] xl:w-[982px] mt-10"
          data-aos="fade"
        >
          At ACS, we simplify the seminar event planning process. Our platform offers a
          comprehensive solution for all your seminar needs, from scheduling and budget
          management to vendor coordination and more. Our goal is to make it easier for
          you to plan and execute successful seminar events. We're committed to delivering
          exceptional service and always putting our customers first. Let us help bring
          your vision to life."
        </p>
      </div>
      <div class="mt-10 text-right flex flex-col justify-end items-end">
        <p
          class="text-secondary relative after:absolute after:content-[''] after:bottom-0 after:right-0 after:w-[100px] after:h-0.5 after:bg-secondary text-lg md:text-3xl inline"
          data-aos="fade-up"
        >
          OUR VISION
        </p>
        <p
          class="lg:text-2xl text-priText lg:w-[800px] xl:w-[982px] mt-10"
          data-aos="fade"
        >
          "Our vision is to simplify the seminar event planning process and empower event
          organizers to bring their vision to life with confidence and ease."
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-bg {
  background-image: url("/img/bg-01.svg"), url("/img/bg-02.svg");
  background-repeat: no-repeat;
  background-position: bottom 0px left 0px, top 0px right 0px;
}
</style>
