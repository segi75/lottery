<template>
  <div
    class="min-h-screen bg-apple-gray-50 dark:bg-black transition-colors duration-300"
  >
    <header class="fixed top-0 left-0 right-0 z-50 glass">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        <div class="flex items-center space-x-4">
          <div
            class="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center"
          >
            <span class="text-white dark:text-black font-bold text-lg">A</span>
          </div>
          <h1
            class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            수강신청
          </h1>
        </div>
        <nav class="hidden md:flex items-center space-x-6">
          <a
            href="#"
            class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >수강신청 및 결제</a
          >
          <a
            href="#"
            class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >나의 신청프로그램</a
          >
          <a
            href="#"
            class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >공지사항</a
          >
          <a
            href="#"
            class="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >추첨결과</a
          >
        </nav>
        <div class="flex items-center space-x-4 text-sm font-medium">
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >로그인</a
          >
          <span class="text-gray-300 dark:text-gray-600">|</span>
          <a
            href="#"
            class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >아이디/비번 찾기</a
          >
          <span class="text-gray-300 dark:text-gray-600">|</span>
          <a
            href="#"
            class="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >회원가입</a
          >
        </div>
      </div>
    </header>

    <main class="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Hero Section (Bento Grid Item) -->
        <div
          class="col-span-12 md:col-span-8 glass-card p-8 relative overflow-hidden group"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>
          <h2 class="text-3xl font-bold mb-4 relative z-10">
            환영합니다, 학생님!
          </h2>
          <p
            class="text-gray-500 dark:text-gray-400 mb-6 max-w-md relative z-10"
          >
            2025년 가을학기 수강신청이 시작되었습니다. 전공 관련 신규 강좌를
            확인해보세요.
          </p>
          <button
            class="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform duration-300 relative z-10"
          >
            강좌 둘러보기
          </button>
        </div>

        <!-- Stats Card (Bento Grid Item) -->
        <div
          class="col-span-12 md:col-span-4 glass-card p-6 flex flex-col justify-between"
        >
          <div>
            <h3
              class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
            >
              이수 학점
            </h3>
            <div class="mt-2 flex items-baseline">
              <span class="text-4xl font-bold text-gray-900 dark:text-white"
                >12</span
              >
              <span class="ml-2 text-sm text-gray-500">/ 18</span>
            </div>
          </div>
          <div
            class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4"
          >
            <div
              class="bg-system-blue h-2 rounded-full"
              style="width: 66%"
            ></div>
          </div>
        </div>

        <!-- Course List (Placeholder) -->
        <div class="col-span-12 mt-8">
          <h3 class="text-xl font-bold mb-6">추천 강좌</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="i in 3"
              :key="i"
              class="glass-card p-0 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div class="h-40 bg-gray-200 dark:bg-gray-700 relative">
                <div
                  class="absolute inset-0 flex items-center justify-center text-gray-400"
                >
                  강좌 이미지
                </div>
              </div>
              <div class="p-5">
                <div class="flex justify-between items-start mb-2">
                  <span
                    class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded-md font-medium"
                    >컴퓨터과학 10{{ i }}</span
                  >
                  <span class="text-sm text-gray-500">3 학점</span>
                </div>
                <h4 class="text-lg font-bold mb-1">인공지능 개론</h4>
                <p
                  class="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2"
                >
                  인공지능과 머신러닝의 기초 개념을 학습합니다.
                </p>
                <button
                  class="w-full py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
                >
                  상세 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { Search as SearchIcon, Bell as BellIcon } from "lucide-vue-next";
</script>
