<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
    >
      <NuxtLink
        to="/"
        class="flex items-center group"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div
          class="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
        >
          <span
            class="text-white dark:text-black font-bold text-lg leading-none"
            >A</span
          >
        </div>
        <h1
          class="text-lg lg:text-xl font-semibold tracking-tight text-gray-900 dark:text-white whitespace-nowrap mb-0 leading-none transition-all duration-700 ease-in-out ml-3 lg:ml-0 lg:max-w-0 lg:opacity-0 lg:overflow-hidden lg:group-hover:max-w-[400px] lg:group-hover:opacity-100 lg:group-hover:ml-3"
        >
          엔컴서울지부노인종합사회복지관
        </h1>
      </NuxtLink>
      <nav
        class="hidden lg:flex items-center transition-all duration-700 ease-in-out whitespace-nowrap"
        :class="isMenuCompressed ? 'space-x-4 scale-95' : 'space-x-8'"
      >
        <NuxtLink
          to="/course"
          class="relative group text-[1.1rem] font-medium tracking-tight text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors flex items-center nav-item"
        >
          <EditIcon class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span class="transition-transform duration-300 ease-out group-hover:translate-x-[6px]">수강신청</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/my-programs"
          class="relative group text-[1.1rem] font-medium tracking-tight text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors flex items-center nav-item"
        >
          <UserIcon class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span class="transition-transform duration-300 ease-out group-hover:translate-x-[6px]">나의 신청프로그램</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/notices"
          class="relative group text-[1.1rem] font-medium tracking-tight text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors flex items-center nav-item"
        >
          <BellIcon class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span class="transition-transform duration-300 ease-out group-hover:translate-x-[6px]">공지사항</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
          ></span>
        </NuxtLink>
        <NuxtLink
          to="/lottery"
          class="relative group text-[1.1rem] font-medium tracking-tight text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors flex items-center nav-item"
        >
          <GiftIcon class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span class="transition-transform duration-300 ease-out group-hover:translate-x-[6px]">추첨결과</span>
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"
          ></span>
        </NuxtLink>
      </nav>
      <div class="hidden lg:flex items-center space-x-4 text-lg font-medium">
        <template v-if="!isLoggedIn">
          <NuxtLink
            to="/login"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <LogInIcon class="w-5 h-5" />
            로그인</NuxtLink
          >
          <span class="text-gray-300 dark:text-gray-600">|</span>
          <NuxtLink
            to="/find-account"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >계정찾기</NuxtLink
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
            class="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            <UserPlusIcon class="w-5 h-5" />
            회원가입</NuxtLink
          >
        </template>
        <template v-else>
          <!-- Session Timer -->
          <!-- Session Timer Removed -->
          <span class="text-gray-300 dark:text-gray-600">|</span>
          <!-- Edit Info -->
          <NuxtLink
            to="/user/profile"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-2"
          >
            <SettingsIcon class="w-5 h-5" />
            정보수정
          </NuxtLink>
          <span class="text-gray-300 dark:text-gray-600">|</span>
          <!-- Dark Mode -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle Dark Mode"
          >
            <SunIcon v-if="isDark" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>
          <span class="text-gray-300 dark:text-gray-600">|</span>
          <!-- Logout -->
          <button
            @click="isLoggedIn = false"
            class="text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 transition-colors flex items-center gap-2"
          >
            <LogOutIcon class="w-5 h-5" />
            로그아웃
          </button>
        </template>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline-none"
      >
        <MenuIcon v-if="!isMobileMenuOpen" class="h-6 w-6" />
        <XIcon v-else class="h-6 w-6" />
      </button>
    </div>

    <Teleport to="body">
      <template v-if="isMobileMenuOpen">
        <!-- Mobile Menu Backdrop -->
        <div
          @click="isMobileMenuOpen = false"
          class="lg:hidden fixed inset-0 top-16 bg-black/25 backdrop-blur-sm z-40"
        ></div>

        <!-- Mobile Menu -->
        <div
          class="lg:hidden fixed top-16 left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-lg z-50 transition-colors duration-300"
        >
          <div class="px-4 pt-4 pb-6 space-y-2">
            <NuxtLink
              to="/course"
              @click="isMobileMenuOpen = false"
              class="block px-3 py-2 rounded-md font-medium text-[1.1rem] tracking-tight text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 flex items-center gap-2 transition-all duration-300 group nav-item"
            >
              <EditIcon class="w-5 h-5 transition-transform group-hover:scale-110" />
              <span class="transition-transform duration-300 ease-out group-hover:translate-x-[6px]">수강신청</span>
            </NuxtLink>
            <NuxtLink
              to="/my-programs"
              @click="isMobileMenuOpen = false"
              class="block px-3 py-2 rounded-md font-medium text-[1.1rem] tracking-tight text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 flex items-center gap-2 transition-all duration-300 group nav-item"
            >
              <UserIcon class="w-5 h-5 transition-transform group-hover:scale-110" />
              <span class="transition-transform duration-300 ease-out group-hover:translate-x-[6px]">나의 신청프로그램</span>
            </NuxtLink>
            <NuxtLink
              to="/notices"
              @click="isMobileMenuOpen = false"
              class="block px-3 py-2 rounded-md font-medium text-[1.1rem] tracking-tight text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 flex items-center gap-2 transition-all duration-300 group nav-item"
            >
              <BellIcon class="w-5 h-5 transition-transform group-hover:scale-110" />
              <span class="transition-transform duration-300 ease-out group-hover:translate-x-[6px]">공지사항</span>
            </NuxtLink>
            <NuxtLink
              to="/lottery"
              @click="isMobileMenuOpen = false"
              class="block px-3 py-2 rounded-md font-medium text-[1.1rem] tracking-tight text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 flex items-center gap-2 transition-all duration-300 group nav-item"
            >
              <GiftIcon class="w-5 h-5 transition-transform group-hover:scale-110" />
              <span class="transition-transform duration-300 ease-out group-hover:translate-x-[6px]">추첨결과</span>
            </NuxtLink>
            <div class="border-t border-gray-200 dark:border-gray-700 my-4 pt-4">
              <div class="grid grid-cols-2 gap-4">
                <template v-if="!isLoggedIn">
                  <NuxtLink
                    to="/login"
                    @click="isMobileMenuOpen = false"
                    class="text-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center gap-2"
                  >
                    <LogInIcon class="w-4 h-4" />
                    로그인</NuxtLink
                  >
                  <NuxtLink
                    to="/signup"
                    @click="isMobileMenuOpen = false"
                    class="text-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 flex items-center justify-center gap-2"
                  >
                    <UserPlusIcon class="w-4 h-4" />
                    회원가입</NuxtLink
                  >
                </template>
                <template v-else>
                  <NuxtLink
                    to="/user/profile"
                    @click="isMobileMenuOpen = false"
                    class="text-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center gap-2"
                  >
                    <SettingsIcon class="w-4 h-4" />
                    정보수정</NuxtLink
                  >
                  <button
                    @click="
                      isLoggedIn = false;
                      isMobileMenuOpen = false;
                    "
                    class="text-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center gap-2"
                  >
                    <LogOutIcon class="w-4 h-4" />
                    로그아웃
                  </button>
                </template>
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
                  >계정찾기</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
      </template>
    </Teleport>
  </header>
</template>

<script setup>
import {
  Menu as MenuIcon,
  X as XIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  Edit as EditIcon,
  User as UserIcon,
  Bell as BellIcon,
  Gift as GiftIcon,
  LogIn as LogInIcon,
  UserPlus as UserPlusIcon,
  Settings as SettingsIcon,
  LogOut as LogOutIcon,
} from "lucide-vue-next";
import { ref, onMounted, computed } from "vue";

const isMobileMenuOpen = ref(false);
const isDark = ref(false);
const isLogoHovered = ref(false);
const isMenuCompressed = ref(false);
const isLoggedIn = ref(true); // Default to true for testing
let hoverTimeout;

const handleMouseEnter = () => {
  clearTimeout(hoverTimeout);
  isLogoHovered.value = true;
  isMenuCompressed.value = true;
};

const handleMouseLeave = () => {
  isLogoHovered.value = false;
  hoverTimeout = setTimeout(() => {
    isMenuCompressed.value = false;
  }, 300);
};

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

<style scoped>
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

.nav-item {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
</style>
