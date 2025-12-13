<template>
  <div>
    <!-- Independent Hero Section -->
    <HeroSection />

    <main class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Hero Section (Banner Card) -->
      <BannerCard />

      <!-- Lottery Results Card (Bento Grid Item) -->
      <div
        class="col-span-12 md:col-span-4 glass-card p-8 flex flex-col justify-between relative overflow-hidden animate-scale-in"
      >
        <div
          class="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl -mr-10 -mt-10"
        ></div>

        <div class="flex flex-col h-full">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200">
              추첨결과
            </h3>
            <span
              v-if="isLoggedIn"
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full font-bold"
              >발표 완료</span
            >
          </div>

          <!-- Logged In State: My Results List -->
          <div v-if="isLoggedIn" class="space-y-4 flex-1">
            <div
              class="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800"
            >
              <div class="flex justify-between items-center mb-1">
                <span class="font-bold text-xl text-gray-900 dark:text-white"
                  >신나는 노래교실 A반</span
                >
              </div>
              <span
                class="text-green-600 dark:text-green-400 font-extrabold text-2xl"
                >당첨되셨습니다! 🎉</span
              >
            </div>
            <div
              class="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700"
            >
              <div class="flex justify-between items-center mb-1">
                <span class="font-bold text-xl text-gray-800 dark:text-gray-200"
                  >스마트폰 기초</span
                >
              </div>
              <span class="text-gray-600 dark:text-gray-400 font-bold text-xl"
                >대기 3번</span
              >
            </div>
          </div>

          <!-- Logged Out State: Login Prompt -->
          <div
            v-else
            class="flex flex-col items-center justify-center flex-1 text-center py-4"
          >
            <div
              class="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <p class="text-gray-500 dark:text-gray-400 mb-4 text-sm">
              <span class="font-bold text-gray-900 dark:text-white text-lg"
                >나의 추첨 결과</span
              >를 확인하려면<br />로그인이 필요합니다.
            </p>
            <NuxtLink
              to="/login"
              class="px-5 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-bold hover:scale-105 transition-transform text-sm"
            >
              로그인하기
            </NuxtLink>
          </div>

          <NuxtLink
            to="/lottery"
            class="btn-secondary mt-6 w-full block text-center"
          >
            전체 결과 보기
          </NuxtLink>
        </div>
      </div>

      <!-- Notices & Popular Courses -->
      <div class="col-span-12 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Notices -->
        <div class="glass-card p-8 animate-slide-up">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
              공지사항
            </h3>
            <NuxtLink
              to="/notices"
              class="text-lg font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >더보기 +</NuxtLink
            >
          </div>
          <ul class="space-y-4">
            <li
              class="flex items-start justify-between p-4 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-[1.02] rounded-xl cursor-pointer"
            >
              <div class="flex flex-col">
                <span
                  class="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-blue-700 transition-colors cursor-pointer"
                  >2025년 상반기 수강신청 안내</span
                >
                <span class="text-sm text-gray-500 mt-1">2024.12.01</span>
              </div>
              <span
                class="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded"
                >NEW</span
              >
            </li>
            <li
              class="flex items-start justify-between p-4 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-[1.02] rounded-xl cursor-pointer"
            >
              <div class="flex flex-col">
                <span
                  class="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-blue-700 transition-colors cursor-pointer"
                  >복지관 휴관 안내 (설 연휴)</span
                >
                <span class="text-sm text-gray-500 mt-1">2024.11.28</span>
              </div>
            </li>
            <li
              class="flex items-start justify-between p-4 border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-[1.02] rounded-xl cursor-pointer"
            >
              <div class="flex flex-col">
                <span
                  class="text-xl font-medium text-gray-900 dark:text-gray-100 hover:text-blue-700 transition-colors cursor-pointer"
                  >셔틀버스 운행 시간 변경</span
                >
                <span class="text-sm text-gray-500 mt-1">2024.11.20</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Popular Courses -->
        <div>
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
              인기 강좌
            </h3>
            <NuxtLink
              to="/course"
              class="text-lg font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >전체 보기 +</NuxtLink
            >
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="glass-card p-6 card-interactive animate-slide-up">
              <span
                class="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded mb-2 inline-block"
                >건강/운동</span
              >
              <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                실버 요가 교실
              </h4>
              <p class="text-gray-600 dark:text-gray-300 text-base mb-4">
                매주 월/수 10:00
              </p>
              <span class="text-blue-700 font-bold text-lg">접수중</span>
            </div>
            <div class="glass-card p-6 card-interactive animate-slide-up">
              <span
                class="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded mb-2 inline-block"
                >취미/여가</span
              >
              <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                스마트폰 왕초보
              </h4>
              <p class="text-gray-600 dark:text-gray-300 text-base mb-4">
                매주 화/목 14:00
              </p>
              <span class="text-red-600 font-bold text-lg">마감임박</span>
            </div>
            <div class="glass-card p-6 card-interactive animate-slide-up">
              <span
                class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded mb-2 inline-block"
                >문화/예술</span
              >
              <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                캘리그라피 기초
              </h4>
              <p class="text-gray-600 dark:text-gray-300 text-base mb-4">
                매주 금 13:00
              </p>
              <span class="text-blue-700 font-bold text-lg">접수중</span>
            </div>
            <div class="glass-card p-6 card-interactive animate-slide-up">
              <span
                class="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded mb-2 inline-block"
                >건강/운동</span
              >
              <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                신나는 댄스 파티
              </h4>
              <p class="text-gray-600 dark:text-gray-300 text-base mb-4">
                매주 토 15:00
              </p>
              <span class="text-red-600 font-bold text-lg">마감임박</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

import BannerCard from "~/components/main/BannerCard.vue";
import HeroSection from "~/components/main/HeroSection.vue";

const isLoggedIn = useState("isLoggedIn", () => false);
</script>
