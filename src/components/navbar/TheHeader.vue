<template>
  <header
    class="header bg-white text-priText flex items-center main fixed w-full h-[78px] top-0 left-0 z-50 box-shadow"
  >
    <div class="container">
      <div class="header-content flex justify-between items-center w-full">
        <RouterLink to="/">
          <img v-lazy="'/img/logo.svg'" alt="logo" class="w-[123px] h-[44px]" />
        </RouterLink>
        <nav
          class="fixed h-full w-full top-0 -left-full mt-[76px] bg-white py-8 lg:relative lg:w-auto lg:left-0 lg:m-0 lg:p-0 lg:bg-inherit transition-all duration-500 lg:transition-none"
          :class="{ 'open-navbar': show }"
        >
          <ul class="block text-center lg:flex lg:gap-x-9 lg:m-0 lg:items-center">
            <li
              class="mb-8 lg:m-0 mt-10"
              v-for="route in routes"
              :key="route.path"
              @click="handleRouting(route)"
            >
              <RouterLink
                :to="route.path"
                active-class="active-link"
                v-if="route.reroute"
              >
                {{ route.name }}
              </RouterLink>
              <a :href="route.path" :class="{ 'active-link': route.active }" v-else>{{
                route.name
              }}</a>
            </li>
          </ul>
        </nav>
        <ul
          class="lg:flex lg:gap-x-[25px] lg:m-0 text-center lg:space-x-4 lg:items-center hidden p-0"
        >
          <li class="mb-8 lg:m-0 mt-10">
            <RouterLink to="/auth/signin" class="text-secondary"> Sign In </RouterLink>
          </li>
          <li class="mb-8 lg:m-0 mt-10">
            <RouterLink
              to="/auth/signin"
              class="btn bg-white border border-secondary text-secondary rounded-lg px-5"
            >
              Join ACS
            </RouterLink>
          </li>
        </ul>
        <div
          class="toggle lg:hidden transition-all duration-500"
          @click="toggleNav"
          :class="{ change: show }"
        >
          <div class="toggler"></div>
          <div class="toggler"></div>
          <div class="toggler"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const routes = ref<{ name: string; path: string; active: boolean; reroute: boolean }[]>([
  {
    name: "Home",
    path: "/",
    active: true,
    reroute: true,
  },
  {
    name: "About",
    path: "#about",
    active: false,
    reroute: false,
  },
  {
    name: "Events",
    path: "/events",
    active: false,
    reroute: true,
  },
  {
    name: "Speakers",
    path: "#speakers",
    active: false,
    reroute: false,
  },
  {
    name: "Sponsors",
    path: "#sponsors",
    active: false,
    reroute: false,
  },
  {
    name: "FAQs",
    path: "#faq",
    active: false,
    reroute: false,
  },
]);
const show = ref(false);

const handleRouting = (status: { name: string; path: string; active: boolean }) => {
  routes.value.forEach((link) => (link.active = false));
  status.active = !status.active;
  console.log(status);
};

const toggleNav = () => {
  show.value = !show.value;
};

const router = useRouter();

onMounted(() => {
  router.beforeEach(() => {
    show.value = false;
  });
});
</script>

<style scoped>
.active-link {
  @apply relative after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:content-[''] after:bg-[#FF6633] after:w-[80%] after:h-1 after:rounded-full text-lg font-semibold text-primary;
}
</style>
