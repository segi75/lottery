<template>
  <div class="flex items-center justify-center space-x-2">
    <button
      @click="$emit('page-change', currentPage - 1)"
      :disabled="currentPage === 1"
      class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      aria-label="Previous Page"
    >
      <ChevronLeftIcon class="w-5 h-5 text-gray-600 dark:text-gray-400" />
    </button>

    <div class="flex items-center space-x-1">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="$emit('page-change', page)"
        class="w-8 h-8 rounded-lg text-sm font-medium transition-colors"
        :class="[
          currentPage === page
            ? 'bg-black dark:bg-white text-white dark:text-black'
            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
        ]"
      >
        {{ page }}
      </button>
    </div>

    <button
      @click="$emit('page-change', currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      aria-label="Next Page"
    >
      <ChevronRightIcon class="w-5 h-5 text-gray-600 dark:text-gray-400" />
    </button>
  </div>
</template>

<script setup>
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "lucide-vue-next";

defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

defineEmits(["page-change"]);
</script>
