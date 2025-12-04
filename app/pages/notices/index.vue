<template>
  <div class="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto space-y-8">
      <!-- Header Section -->
      <!-- Header Section -->
      <div class="text-center mb-8">
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3"
        >
          <BellIcon
            class="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400"
          />
          공지사항
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          복지관의 주요 소식과 안내사항을 확인하세요.
        </p>
      </div>

      <!-- Search Section -->
      <div class="glass-card p-6 flex justify-end">
        <div class="w-full md:w-96 relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="제목을 입력하세요"
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
                  제목
                </th>
                <th
                  class="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white w-32"
                >
                  작성자
                </th>
                <th
                  class="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white w-32"
                >
                  작성일
                </th>
                <th
                  class="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white w-24"
                >
                  조회수
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr
                v-for="notice in paginatedNotices"
                :key="notice.id"
                class="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer"
                @click="goToDetail(notice.id)"
              >
                <td
                  class="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400"
                >
                  {{ notice.id }}
                </td>
                <td class="px-6 py-4">
                  <div
                    class="text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {{ notice.title }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400"
                >
                  {{ notice.author }}
                </td>
                <td
                  class="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400"
                >
                  {{ notice.date }}
                </td>
                <td
                  class="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400"
                >
                  {{ notice.views }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Mobile Card List -->
      <div class="md:hidden space-y-4">
        <div
          v-for="notice in paginatedNotices"
          :key="notice.id"
          class="glass-card p-5 cursor-pointer active:scale-[0.98] transition-transform"
          @click="goToDetail(notice.id)"
        >
          <div class="flex justify-between items-start gap-4">
            <h3
              class="text-lg font-bold text-gray-900 dark:text-white line-clamp-2"
            >
              {{ notice.title }}
            </h3>
            <span class="text-xs text-gray-400 whitespace-nowrap"
              >No.{{ notice.id }}</span
            >
          </div>
          <div
            class="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
          >
            <span>{{ notice.author }}</span>
            <div class="flex items-center gap-3">
              <span>{{ notice.date }}</span>
              <span class="flex items-center gap-1">
                <EyeIcon class="w-3 h-3" />
                {{ notice.views }}
              </span>
            </div>
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
import { useRouter } from "vue-router";
import {
  Search as SearchIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Eye as EyeIcon,
  Bell as BellIcon,
} from "lucide-vue-next";

const router = useRouter();
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 15;

// Mock Data
const allNotices = Array.from({ length: 50 }, (_, i) => ({
  id: 50 - i,
  title: `2025년도 상반기 프로그램 수강신청 안내 ${50 - i}`,
  author: "관리자",
  date: "2024.12.01",
  views: Math.floor(Math.random() * 500) + 50,
}));

const filteredNotices = computed(() => {
  return allNotices.filter((notice) =>
    notice.title.includes(searchQuery.value)
  );
});

const totalPages = computed(() =>
  Math.ceil(filteredNotices.value.length / itemsPerPage)
);

const paginatedNotices = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredNotices.value.slice(start, end);
});

const handleSearch = () => {
  currentPage.value = 1;
};

const goToDetail = (id) => {
  router.push(`/notices/${id}`);
};
</script>
