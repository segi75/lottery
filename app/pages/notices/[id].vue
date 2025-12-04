<template>
  <div class="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="mb-8">
        <NuxtLink
          to="/notices"
          class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-4 transition-colors"
        >
          <ChevronLeftIcon class="w-5 h-5 mr-1" />
          목록으로 돌아가기
        </NuxtLink>
        <h1
          class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {{ notice.title }}
        </h1>
        <div
          class="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-gray-700"
        >
          <span class="flex items-center gap-1">
            <UserIcon class="w-4 h-4" />
            {{ notice.author }}
          </span>
          <span class="w-px h-3 bg-gray-300 dark:bg-gray-600"></span>
          <span class="flex items-center gap-1">
            <CalendarIcon class="w-4 h-4" />
            {{ notice.date }}
          </span>
          <span class="w-px h-3 bg-gray-300 dark:bg-gray-600"></span>
          <span class="flex items-center gap-1">
            <EyeIcon class="w-4 h-4" />
            {{ notice.views }}
          </span>
        </div>
      </div>

      <!-- Content Section -->
      <div class="glass-card p-8 min-h-[400px] mb-8">
        <div class="prose dark:prose-invert max-w-none">
          <p class="whitespace-pre-line text-gray-800 dark:text-gray-200">
            {{ notice.content }}
          </p>
        </div>

        <!-- Attachments -->
        <div
          v-if="notice.attachments && notice.attachments.length > 0"
          class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 class="text-sm font-bold text-gray-900 dark:text-white mb-3">
            첨부파일
          </h3>
          <ul class="space-y-2">
            <li
              v-for="(file, index) in notice.attachments"
              :key="index"
              class="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              <PaperclipIcon class="w-4 h-4" />
              {{ file.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex justify-between items-center">
        <button
          class="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
          @click="goToPrev"
        >
          이전글
        </button>
        <button
          class="px-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-black transition-colors shadow-sm"
          @click="goToList"
        >
          목록
        </button>
        <button
          class="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
          @click="goToNext"
        >
          다음글
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  ChevronLeft as ChevronLeftIcon,
  User as UserIcon,
  Calendar as CalendarIcon,
  Eye as EyeIcon,
  Paperclip as PaperclipIcon,
} from "lucide-vue-next";

const route = useRoute();
const router = useRouter();
const noticeId = route.params.id;

// Mock Data
const notice = ref({
  id: noticeId,
  title: `2025년도 상반기 프로그램 수강신청 안내 ${noticeId}`,
  author: "관리자",
  date: "2024.12.01",
  views: 1234,
  content: `안녕하세요, 복지관입니다.

2025년도 상반기 프로그램 수강신청 일정을 안내해 드립니다.
어르신들의 많은 관심과 참여 부탁드립니다.

1. 신청기간: 2024.12.10(월) ~ 12.14(금)
2. 신청방법: 온라인 접수 및 방문 접수
3. 추첨발표: 2024.12.19(수)

자세한 내용은 첨부파일을 확인해 주시기 바랍니다.
감사합니다.`,
  attachments: [{ name: "2025년_상반기_프로그램_안내.pdf" }],
});

const goToList = () => {
  router.push("/notices");
};

const goToPrev = () => {
  // Mock Logic
  console.log("Go to prev");
};

const goToNext = () => {
  // Mock Logic
  console.log("Go to next");
};
</script>
