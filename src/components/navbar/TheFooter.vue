<template>
  <footer class="py-16 bg-[#660066] text-white">
    <div class="container">
      <div class="md:grid grid-cols-3 gap-10 lg:flex justify-between">
        <div class="mb-10 md:mb-0">
          <RouterLink :to="{ name: 'index' }">
            <p class="text-2xl">ACS</p>
          </RouterLink>
          <div class="flex items-center gap-5 mt-4">
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.link"
              class="transition-all ease-in-out duration-500 hover:scale-[0.8]"
              target="_blank"
            >
              <Icon :icon="`mdi:${social.icon}`" width="20" />
            </a>
          </div>
        </div>
        <ul class="mb-8 md:mb-0">
          <li class="mb-4 lg:text-lg font-bold">Company</li>
          <li v-for="company in companies" :key="company.routeName" class="mb-4">
            <RouterLink :to="{ name: company.routeName }">{{ company.name }}</RouterLink>
          </li>
        </ul>
        <ul>
          <li class="mb-4 lg:text-lg font-bold">Programmes</li>
          <li v-for="programme in programmes" :key="programme.routeName" class="mb-4">
            <RouterLink :to="{ name: programme.routeName }">{{
              programme.name
            }}</RouterLink>
          </li>
        </ul>
        <ul class="mb-8 md:mb-0">
          <li class="mb-4 lg:text-lg font-bold">Resources</li>
          <li v-for="resource in resources" :key="resource.routeName" class="mb-4">
            <RouterLink :to="{ name: resource.routeName }">{{
              resource.name
            }}</RouterLink>
          </li>
        </ul>
        <ul>
          <li class="mb-4 lg:text-lg font-bold">Developers</li>
          <li v-for="developer in developers" :key="developer.routeName" class="mb-4">
            <RouterLink :to="{ name: developer.routeName }">{{
              developer.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
      <div
        class="flex justify-between items-center gap-5 flex-col md:flex-row mt-12 text-center"
      >
        <p class="font-bold">&copy; 2022 ACS Services. All Rights Reserved</p>
        <p class="flex justify-between items-center gap-5">
          <span>Privacy Policy</span> <span>Terms and Conditions</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
const contact = {
  email: 'hello@coded_menu.com',
  tel: '+234 000 000 0000'
}

const socials = [
  {
    icon: 'linkedin',
    link: 'https://linkedin.com/in/coded_menu'
  },
  {
    icon: 'facebook',
    link: 'https://facebook.com/coded_menu'
  },
  {
    icon: 'instagram',
    link: 'https://instagram.com/coded_menu'
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com/coded_menu'
  }
]

const companies = [
  {
    name: 'About Us',
    routeName: 'index'
  },
  {
    name: 'Contact Us',
    routeName: 'index'
  }
]

const programmes = [
  {
    name: 'Privacy Policy Generator',
    routeName: 'index'
  },
  {
    name: 'ACS Generator',
    routeName: 'index'
  }
]

const resources = [
  {
    name: 'Templates',
    routeName: 'index'
  },
  {
    name: 'Docs',
    routeName: 'index'
  }
]

const developers = [
  {
    name: 'Forum',
    routeName: 'index'
  },
  {
    name: 'Projects',
    routeName: 'index'
  },
  {
    name: 'Partnerships',
    routeName: 'index'
  }
]
</script>

<style lang="scss" scoped></style>
