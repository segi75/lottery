<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    <div
      v-for="course in courses"
      :key="course.id"
      class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div class="flex justify-between items-start mb-4">
        <span
          class="px-3 py-1 rounded-full text-xs font-bold"
          :class="[
            course.status === '접수중'
              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400',
          ]"
        >
          {{ course.status }}
        </span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{
          course.category
        }}</span>
      </div>

      <h3
        class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
      >
        {{ course.title }}
      </h3>

      <div class="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
        <div class="flex items-center">
          <UserIcon class="w-4 h-4 mr-2 opacity-70" />
          <span>{{ course.instructor }}</span>
        </div>
        <div class="flex items-center">
          <ClockIcon class="w-4 h-4 mr-2 opacity-70" />
          <span>{{ course.time }}</span>
        </div>
        <div class="flex items-center">
          <CalendarIcon class="w-4 h-4 mr-2 opacity-70" />
          <span>{{ course.period }}</span>
        </div>
      </div>

      <div
        class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700"
      >
        <div
          class="text-sm flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2"
        >
          <div>
            <span class="text-gray-500 dark:text-gray-400">정원</span>
            <span class="ml-1 font-bold text-gray-900 dark:text-white"
              >{{ course.capacity }}명</span
            >
          </div>
          <div class="hidden sm:block text-gray-300">|</div>
          <div>
            <span class="text-gray-500 dark:text-gray-400">신청자</span>
            <span class="ml-1 font-bold text-blue-600 dark:text-blue-400"
              >{{ course.current }}명</span
            >
          </div>
        </div>
        <button
          class="px-4 py-2 rounded-lg font-medium text-sm transition-colors"
          :class="[
            course.status === '접수중'
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400',
          ]"
          :disabled="course.status !== '접수중'"
        >
          신청하기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  User as UserIcon,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
} from "lucide-vue-next";

defineProps({
  courses: {
    type: Array,
    required: true,
  },
});
</script>
