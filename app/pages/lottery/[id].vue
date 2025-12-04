<template>
  <div class="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto space-y-8">
      <!-- Header Section -->
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <NuxtLink
            to="/lottery"
            class="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-2 transition-colors"
          >
            <ChevronLeftIcon class="w-5 h-5 mr-1" />
            목록으로 돌아가기
          </NuxtLink>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
            {{ programName }}
          </h1>
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            해당 프로그램의 당첨자 및 대기자 명단입니다.
          </p>
        </div>
      </div>

      <!-- Search Section -->
      <div class="glass-card p-6 flex justify-end">
        <div class="w-full md:w-96 relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="이름을 입력하세요"
            class="w-full pl-4 pr-10 py-2.5 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            @keyup.enter="handleSearch"
          />
          <button
            @click="handleSearch"
            class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <SearchIcon class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Desktop Data Table -->
      <div class="hidden md:block glass-card overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr
                class="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700"
              >
                <th
                  class="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white w-20"
                >
                  번호
                </th>
                <th
                  class="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white"
                >
                  프로그램명
                </th>
                <th
                  class="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white w-32"
                >
                  성명
                </th>
                <th
                  class="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white w-32"
                >
                  회원번호
                </th>
                <th
                  class="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white w-40"
                >
                  비고
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr
                v-for="(applicant, index) in paginatedApplicants"
                :key="applicant.id"
                class="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <td
                  class="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400"
                >
                  {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                </td>
                <td
                  class="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium"
                >
                  {{ programName }}
                </td>
                <td
                  class="px-6 py-4 text-center text-sm text-gray-900 dark:text-white"
                >
                  {{ applicant.name }}
                </td>
                <td
                  class="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400"
                >
                  {{ applicant.userNo }}
                </td>
                <td class="px-6 py-4 text-center">
                  <span
                    v-if="applicant.status === 'winner'"
                    class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-sm font-bold shadow-sm"
                  >
                    당첨
                  </span>
                  <span
                    v-else-if="applicant.status === 'waiting'"
                    class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-sm font-bold shadow-sm"
                  >
                    대기 {{ applicant.waitingNo }}번
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Mobile Card List -->
      <div class="md:hidden space-y-4">
        <div
          v-for="(applicant, index) in paginatedApplicants"
          :key="applicant.id"
          class="glass-card p-5 flex items-center justify-between"
          :class="{
            'border-l-4 border-red-500': applicant.status === 'winner',
            'border-l-4 border-yellow-500': applicant.status === 'waiting',
          }"
        >
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs font-mono text-gray-400 dark:text-gray-500"
                >#{{ (currentPage - 1) * itemsPerPage + index + 1 }}</span
              >
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">
                {{ applicant.name }}
              </h3>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ applicant.userNo }}
            </p>
          </div>

          <div>
            <span
              v-if="applicant.status === 'winner'"
              class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-sm font-bold shadow-sm"
            >
              당첨
            </span>
            <span
              v-else-if="applicant.status === 'waiting'"
              class="inline-flex items-center justify-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-sm font-bold shadow-sm"
            >
              대기 {{ applicant.waitingNo }}번
            </span>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div
        class="glass-card px-6 py-4 flex items-center justify-center"
        v-if="totalPages > 0"
      >
        <div class="flex items-center space-x-2">
          <button
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            <ChevronLeftIcon class="w-5 h-5" />
          </button>
          <div class="flex items-center space-x-1">
            <button
              v-for="page in totalPages"
              :key="page"
              class="w-8 h-8 rounded-lg text-sm font-medium transition-colors"
              :class="
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              "
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </div>
          <button
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            <ChevronRightIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import {
  Search as SearchIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-vue-next";

const route = useRoute();
const programId = route.params.id;
const programName = `스마트폰 기초 ${programId}반`; // Mock Data

const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;

// Mock Data Generation
const allApplicants = Array.from({ length: 50 }, (_, i) => {
  let status = "failed";
  let waitingNo = null;

  if (i < 20) {
    status = "winner";
  } else if (i < 30) {
    status = "waiting";
    waitingNo = i - 19;
  }

  return {
    id: i + 1,
    name: `신청자${i + 1}`,
    userNo: `2025${String(i + 1).padStart(4, "0")}`,
    status,
    waitingNo,
  };
});

// Filter only Winners and Waiting list
const visibleApplicants = computed(() => {
  return allApplicants.filter((app) => app.status !== "failed");
});

const filteredApplicants = computed(() => {
  return visibleApplicants.value.filter((applicant) =>
    applicant.name.includes(searchQuery.value)
  );
});

const totalPages = computed(() =>
  Math.ceil(filteredApplicants.value.length / itemsPerPage)
);

const paginatedApplicants = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredApplicants.value.slice(start, end);
});

const handleSearch = () => {
  currentPage.value = 1;
};
</script>
