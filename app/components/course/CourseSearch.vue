<template>
  <div class="w-full max-w-2xl mx-auto mb-8">
    <div class="relative">
      <input
        type="text"
        v-model="searchQuery"
        @keyup.enter="handleSearch"
        placeholder="강좌명 또는 강사명을 검색하세요"
        class="w-full px-6 py-4 pl-14 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-lg text-gray-900 dark:text-white placeholder-gray-400"
      />
      <SearchIcon
        class="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
      />
      <button
        @click="handleSearch"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
      >
        검색
      </button>
    </div>
  </div>
</template>

<script setup>
import { Search as SearchIcon } from "lucide-vue-next";
import { ref } from "vue";

const emit = defineEmits(["search"]);
const searchQuery = ref("");

const handleSearch = () => {
  emit("search", searchQuery.value);
};
</script>
