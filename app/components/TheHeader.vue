<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 group">
        <div
          class="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
        >
          <span
            class="text-white dark:text-black font-bold text-lg leading-none"
            >A</span
          >
        </div>
        <h1
          class="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white whitespace-nowrap mb-0 leading-none group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
        >
          엔컴서울지부노인종합사회복지관
        </h1>
      </NuxtLink>
      <nav class="hidden md:flex items-center space-x-8">
        <NuxtLink
          to="/course"
          class="relative group text-xl font-bold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          <span>수강신청</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/my-programs"
          class="relative group text-xl font-bold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          <span>나의 신청프로그램</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/notices"
          class="relative group text-xl font-bold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          <span>공지사항</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/lottery"
          class="relative group text-xl font-bold text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
        >
          <span>추첨결과</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
          ></span>
        </NuxtLink>
      </nav>
      <div class="hidden md:flex items-center space-x-4 text-lg font-medium">
        <NuxtLink
          to="/login"
          class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >로그인</NuxtLink
        >
        <span class="text-gray-300 dark:text-gray-600">|</span>
        <NuxtLink
          to="/find-account"
          class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >아이디/비번 찾기</NuxtLink
        >
        <span class="text-gray-300 dark:text-gray-600">|</span>
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none transition-colors"
          aria-label="Toggle Dark Mode"
        >
          <SunIcon v-if="isDark" class="h-5 w-5" />
          <MoonIcon v-else class="h-5 w-5" />
        </button>
        <NuxtLink
          to="/signup"
          class="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >회원가입</NuxtLink
        >
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none"
      >
        <MenuIcon v-if="!isMobileMenuOpen" class="h-6 w-6" />
        <XIcon v-else class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg z-40 transition-colors duration-300"
    >
      <div class="px-4 pt-4 pb-6 space-y-2">
        <NuxtLink
          to="/course"
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
          >수강신청</NuxtLink
        >
        <NuxtLink
          to="/my-programs"
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
          >나의 신청프로그램</NuxtLink
        >
        <NuxtLink
          to="/notices"
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
          >공지사항</NuxtLink
        >
        <NuxtLink
          to="/lottery"
          @click="isMobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
          >추첨결과</NuxtLink
        >
        <div class="border-t border-gray-200 dark:border-gray-700 my-4 pt-4">
          <div class="grid grid-cols-2 gap-4">
            <NuxtLink
              to="/login"
              @click="isMobileMenuOpen = false"
              class="text-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >로그인</NuxtLink
            >
            <NuxtLink
              to="/signup"
              @click="isMobileMenuOpen = false"
              class="text-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200"
              >회원가입</NuxtLink
            >
          </div>
          <div class="mt-4 text-center flex flex-col items-center space-y-4">
            <button
              type="button"
              @click="toggleDarkMode"
              class="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white active:scale-95 transition-transform"
            >
              <SunIcon v-if="isDark" class="h-5 w-5" />
              <MoonIcon v-else class="h-5 w-5" />
              <span>{{
                isDark ? "라이트 모드로 전환" : "다크 모드로 전환"
              }}</span>
            </button>
            <NuxtLink
              to="/find-account"
              class="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >아이디/비번 찾기</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import {
  Menu as MenuIcon,
  X as XIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
} from "lucide-vue-next";
import { ref, onMounted, computed } from "vue";

const isMobileMenuOpen = ref(false);
const isDark = ref(false);

useHead({
  meta: [
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#000000" : "#ffffff")),
    },
  ],
});

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  updateTheme();
};

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (!savedTheme && systemDark)) {
    isDark.value = true;
  } else {
    isDark.value = false;
  }
  updateTheme();
});
</script>
