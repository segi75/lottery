<template>
  <div class="min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto space-y-8">
      <!-- Header Section -->
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
            추첨결과
          </h1>
          <p class="mt-2 text-gray-600 dark:text-gray-400">
            프로그램별 추첨 결과와 당첨자 명단을 확인하실 수 있습니다.
          </p>
        </div>
      </div>

      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px] mb-12 relative z-0"
      >
        <!-- Left Pane: Program List -->
        <div class="lg:col-span-4 flex flex-col gap-4 h-full">
          <!-- Filter & Search (Compact) -->
          <div class="glass-card p-4 space-y-3 flex-none">
            <SemesterSelector v-model="selectedSemester" />
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="프로그램명 검색"
                class="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                @keyup.enter="handleSearch"
              />
              <SearchIcon
                class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              />
            </div>
          </div>

          <!-- Program List (Compact) -->
          <div
            class="glass-card overflow-hidden flex flex-col h-[600px] lg:h-full flex-1 min-h-0"
          >
            <div class="overflow-y-auto flex-1 p-2 space-y-2">
              <div
                v-for="program in paginatedPrograms"
                :key="program.id"
                @click="selectProgram(program.id)"
                class="p-3 rounded-xl cursor-pointer transition-all border"
                :class="
                  selectedProgramId === program.id
                    ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 ring-1 ring-blue-500/20'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                "
              >
                <div class="flex justify-between items-start mb-1">
                  <h3
                    class="font-bold text-sm text-gray-900 dark:text-white line-clamp-1"
                  >
                    {{ program.name }}
                  </h3>
                  <span
                    class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium whitespace-nowrap"
                    :class="getRateClass(program.rate)"
                  >
                    {{ program.rate }}%
                  </span>
                </div>
                <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  {{ program.instructor }} | {{ program.schedule }}
                </p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <span
                    >정원
                    <strong class="text-gray-900 dark:text-white">{{
                      program.capacity
                    }}</strong></span
                  >
                  <span class="w-px h-2 bg-gray-300"></span>
                  <span
                    >신청
                    <strong class="text-gray-900 dark:text-white">{{
                      program.applicants
                    }}</strong></span
                  >
                </div>
              </div>
              <div
                v-if="paginatedPrograms.length === 0"
                class="text-center py-8 text-sm text-gray-500"
              >
                검색 결과가 없습니다.
              </div>
            </div>

            <!-- Pagination -->
            <div
              class="pt-2 pb-2 border-t border-gray-200 dark:border-gray-700 flex items-center justify-center flex-none"
              v-if="totalPages > 0"
            >
              <div class="flex items-center space-x-1">
                <button
                  class="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="currentPage === 1"
                  @click="currentPage--"
                >
                  <ChevronLeftIcon class="w-4 h-4" />
                </button>
                <div class="flex items-center space-x-1">
                  <button
                    v-for="page in displayedPages"
                    :key="page"
                    class="w-6 h-6 rounded-lg text-xs font-medium transition-colors"
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
                  class="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="currentPage === totalPages"
                  @click="currentPage++"
                >
                  <ChevronRightIcon class="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Pane: Detail View (Desktop Only) -->
        <div class="hidden lg:block lg:col-span-8 h-full">
          <div class="glass-card p-6 h-full flex flex-col overflow-hidden">
            <ProgramResultDetail
              v-if="selectedProgramId"
              :program-id="selectedProgramId"
            />
            <div
              v-else
              class="h-full flex flex-col items-center justify-center text-gray-400"
            >
              <div
                class="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4"
              >
                <SearchIcon class="w-8 h-8" />
              </div>
              <p class="text-lg font-medium text-gray-500 dark:text-gray-400">
                좌측 목록에서 프로그램을 선택해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Modal -->
    <ProgramResultModal
      :is-open="isMobileModalOpen"
      :program-id="selectedProgramId"
      @close="closeMobileModal"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import {
  Search as SearchIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-vue-next";
import SemesterSelector from "~/components/my-program/SemesterSelector.vue";
import ProgramResultDetail from "~/components/lottery/ProgramResultDetail.vue";
import ProgramResultModal from "~/components/lottery/ProgramResultModal.vue";

const selectedSemester = ref("2025-1");
const searchQuery = ref("");
const selectedProgramId = ref(null);
const isMobileModalOpen = ref(false);
const isMobile = ref(false);

// Pagination State
const currentPage = ref(1);
const itemsPerPage = 7; // Adjust based on height

// Mock Data
const allPrograms = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `스마트폰 기초 ${i + 1}반`,
  instructor: "김강사",
  schedule: "월/수 10:00-12:00",
  capacity: 20,
  applicants: Math.floor(Math.random() * 50) + 10,
  get rate() {
    return ((this.applicants / this.capacity) * 100).toFixed(1);
  },
}));

const filteredPrograms = computed(() => {
  return allPrograms.filter((program) =>
    program.name.includes(searchQuery.value)
  );
});

// Pagination Logic
const totalPages = computed(() =>
  Math.ceil(filteredPrograms.value.length / itemsPerPage)
);

const paginatedPrograms = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredPrograms.value.slice(start, end);
});

const displayedPages = computed(() => {
  const pages = [];
  const maxPages = 5;
  let start = Math.max(1, currentPage.value - Math.floor(maxPages / 2));
  let end = Math.min(totalPages.value, start + maxPages - 1);

  if (end - start + 1 < maxPages) {
    start = Math.max(1, end - maxPages + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

// Reset pagination on search
watch(searchQuery, () => {
  currentPage.value = 1;
});

const getRateClass = (rate) => {
  const numRate = parseFloat(rate);
  if (numRate >= 200)
    return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
  if (numRate >= 100)
    return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
  return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
};

const handleSearch = () => {
  // Search logic is handled by computed property
};

const selectProgram = (id) => {
  selectedProgramId.value = id;
  if (isMobile.value) {
    isMobileModalOpen.value = true;
  }
};

const closeMobileModal = () => {
  isMobileModalOpen.value = false;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024; // lg breakpoint
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
