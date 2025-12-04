<template>
  <main class="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Hero Section (Bento Grid Item) -->
      <div
        class="col-span-12 md:col-span-8 glass-card p-10 relative overflow-hidden group flex flex-col justify-center min-h-[350px] animate-fade-in"
      >
        <div
          class="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-red-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        ></div>
        <div
          class="absolute -right-20 -top-20 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl opacity-50 animate-pulse"
        ></div>

        <h2
          class="text-2xl md:text-4xl font-bold mb-6 relative z-10 text-gradient-primary leading-tight animate-slide-up"
        >
          복지관에 오신걸 환영합니다.
        </h2>
        <div class="mb-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Registration Period -->
          <div
            class="p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700 shadow-sm flex flex-col justify-between h-full transition-transform hover:scale-[1.02]"
          >
            <div class="flex items-center mb-3">
              <div
                class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-blue-600 dark:text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <span class="font-bold text-blue-900 dark:text-blue-100 text-lg"
                >접수 기간</span
              >
              <span
                class="ml-auto px-2.5 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-bold flex items-center"
              >
                <span
                  class="mr-1.5 w-2 h-2 rounded-full bg-blue-500 animate-pulse"
                ></span>
                접수중
              </span>
            </div>
            <p class="text-xl font-bold text-gray-900 dark:text-white pl-1">
              2025.12.20 ~ 12.31
            </p>
          </div>

          <!-- Lottery Period -->
          <div
            class="p-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/50 dark:border-gray-700 shadow-sm flex flex-col justify-between h-full transition-transform hover:scale-[1.02]"
          >
            <div class="flex items-center mb-3">
              <div
                class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-purple-600 dark:text-purple-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span
                class="font-bold text-purple-900 dark:text-purple-100 text-lg"
                >추첨 기간</span
              >
              <span
                class="ml-auto px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-bold flex items-center"
              >
                예정
              </span>
            </div>
            <p class="text-xl font-bold text-gray-900 dark:text-white pl-1">
              2026.01.02 ~ 01.03
            </p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 relative z-10 mt-auto">
          <NuxtLink
            to="/notices"
            class="flex-1 px-6 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl font-bold text-lg border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all shadow-sm flex items-center justify-center"
          >
            수강신청 안내
          </NuxtLink>
          <NuxtLink
            to="/my-programs"
            class="flex-[2] px-6 py-4 bg-blue-600 dark:bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-lg flex items-center justify-center group"
          >
            수강신청 바로가기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>

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
</template>

<script setup>
import { ref } from "vue";

const isLoggedIn = useState("isLoggedIn", () => false);
</script>
