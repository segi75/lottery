<template>
  <div class="flex flex-col h-full">
    <!-- Header Section -->
    <div class="mb-4 flex-none">
      <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
        {{ programName }}
      </h2>
      <p class="mt-1 text-xs md:text-sm text-gray-600 dark:text-gray-400">
        당첨자 및 대기자 명단 (미당첨자는 표시되지 않습니다)
      </p>
    </div>

    <!-- Search Section -->
    <div class="mb-4 flex-none">
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="이름을 입력하세요"
          class="w-full pl-4 pr-10 py-2 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          @keyup.enter="handleSearch"
        />
        <button
          @click="handleSearch"
          class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <SearchIcon class="w-4 h-4" />
        </button>
      </div>
    </div>

    <!-- Data Table (Desktop) -->
    <div class="flex-1 flex flex-col hidden md:flex min-h-0">
      <div class="overflow-y-auto flex-1">
        <table class="w-full">
          <thead class="sticky top-0 bg-white dark:bg-gray-900 z-10">
            <tr
              class="bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700"
            >
              <th
                class="px-4 py-3 text-center text-xs font-semibold text-gray-900 dark:text-white w-16 whitespace-nowrap"
              >
                번호
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-semibold text-gray-900 dark:text-white whitespace-nowrap"
              >
                신청자 정보
              </th>
              <th
                class="px-4 py-3 text-center text-xs font-semibold text-gray-900 dark:text-white w-32 whitespace-nowrap"
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
                class="px-4 py-3 text-center text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap"
              >
                {{ (currentPage - 1) * itemsPerPage + index + 1 }}
              </td>
              <td class="px-4 py-3 text-left">
                <div class="flex flex-col">
                  <span
                    class="text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {{ applicant.name }}
                  </span>
                  <span
                    class="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap"
                  >
                    {{ applicant.userNo }}
                  </span>
                </div>
              </td>
              <td class="px-4 py-3 text-center whitespace-nowrap">
                <span
                  v-if="applicant.status === 'winner'"
                  class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold shadow-sm"
                >
                  당첨
                </span>
                <span
                  v-else-if="applicant.status === 'waiting'"
                  class="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-xs font-bold shadow-sm"
                >
                  대기 {{ applicant.waitingNo }}번
                </span>
              </td>
            </tr>
            <tr v-if="paginatedApplicants.length === 0">
              <td colspan="3" class="px-6 py-12 text-center text-gray-500">
                검색 결과가 없습니다.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Card List (Mobile) -->
    <div class="flex-1 overflow-y-auto md:hidden space-y-2 p-1 min-h-0">
      <div
        v-for="(applicant, index) in paginatedApplicants"
        :key="applicant.id"
        class="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-3 shadow-sm"
        :class="{
          'border-l-4 border-l-red-500': applicant.status === 'winner',
          'border-l-4 border-l-yellow-500': applicant.status === 'waiting',
        }"
      >
        <div class="flex justify-between items-center">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono text-gray-400 dark:text-gray-500"
                >#{{ (currentPage - 1) * itemsPerPage + index + 1 }}</span
              >
              <h3 class="font-bold text-sm text-gray-900 dark:text-white">
                {{ applicant.name }}
              </h3>
              <span class="text-[10px] text-gray-400 dark:text-gray-500">
                {{ applicant.userNo }}
              </span>
            </div>
          </div>
          <div>
            <span
              v-if="applicant.status === 'winner'"
              class="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-[10px] font-bold shadow-sm"
            >
              당첨
            </span>
            <span
              v-else-if="applicant.status === 'waiting'"
              class="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 text-[10px] font-bold shadow-sm"
            >
              대기 {{ applicant.waitingNo }}번
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="paginatedApplicants.length === 0"
        class="text-center py-8 text-sm text-gray-500"
      >
        검색 결과가 없습니다.
      </div>
    </div>

    <!-- Pagination -->
    <div
      class="pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-center"
      v-if="totalPages > 0"
    >
      <div class="flex items-center space-x-2">
        <button
          class="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          <ChevronLeftIcon class="w-4 h-4" />
        </button>
        <div class="flex items-center space-x-1">
          <button
            v-for="page in totalPages"
            :key="page"
            class="w-7 h-7 rounded-lg text-xs font-medium transition-colors"
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
          class="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          <ChevronRightIcon class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import {
  Search as SearchIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-vue-next";

const props = defineProps({
  programId: {
    type: [String, Number],
    required: true,
  },
});

const programName = computed(() => `스마트폰 기초 ${props.programId}반`); // Mock Data

const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;

// Reset pagination when program changes
watch(
  () => props.programId,
  () => {
    searchQuery.value = "";
    currentPage.value = 1;
  }
);

// Mock Data Generation (Simulate different data for different programs)
const allApplicants = computed(() => {
  // Use programId to seed the random generation or just regenerate
  return Array.from({ length: 50 }, (_, i) => {
    let status = "failed";
    let waitingNo = null;

    // Simulate different results based on program ID
    const seed = Number(props.programId) + i;
    const isWinner = seed % 3 === 0; // Simple mock logic
    const isWaiting = !isWinner && seed % 2 === 0;

    if (isWinner) {
      status = "winner";
    } else if (isWaiting) {
      status = "waiting";
      waitingNo = (i % 10) + 1;
    }

    return {
      id: i + 1,
      name: `신청자${i + 1}`,
      userNo: `2025${String(i + 1).padStart(4, "0")}`,
      status,
      waitingNo,
    };
  });
});

// Filter only Winners and Waiting list
const visibleApplicants = computed(() => {
  return allApplicants.value.filter((app) => app.status !== "failed");
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
