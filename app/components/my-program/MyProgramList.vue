<template>
  <div class="space-y-6">
    <div
      v-for="app in applications"
      :key="app.id"
      class="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
    >
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div class="flex-1">
          <div class="flex items-center gap-3 mb-2">
            <span
              class="px-3 py-1 rounded-full text-xs font-bold"
              :class="getStatusClass(app.status)"
            >
              {{ app.status }}
            </span>
            <span
              v-if="app.status === '대기' && app.waitingRank"
              class="text-xs font-bold text-yellow-600 dark:text-yellow-400"
            >
              대기 {{ app.waitingRank }}번
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{
              app.category
            }}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {{ app.title }}
          </h3>
          <div
            class="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300"
          >
            <div class="flex items-center">
              <UserIcon class="w-4 h-4 mr-2 opacity-70" />
              <span>{{ app.instructor }}</span>
            </div>
            <div class="flex items-center">
              <ClockIcon class="w-4 h-4 mr-2 opacity-70" />
              <span>{{ app.time }}</span>
            </div>
            <div class="flex items-center">
              <CalendarIcon class="w-4 h-4 mr-2 opacity-70" />
              <span>{{ app.period }}</span>
            </div>
          </div>
        </div>

        <!-- Won (Pay or Cancel) -->
        <div
          v-if="app.status === '당첨'"
          class="flex flex-col items-end gap-2 min-w-[200px]"
        >
          <div class="text-right">
            <p class="text-xs text-gray-500 dark:text-gray-400">수납기간</p>
            <p class="text-sm font-bold text-red-600 dark:text-red-400">
              {{ app.paymentPeriod }}
            </p>
          </div>
          <div class="flex gap-2 w-full md:w-auto">
            <button
              @click="$emit('cancel-application', app)"
              class="flex-1 md:flex-none px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              취소
            </button>
            <button
              class="flex-1 md:flex-none px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-colors"
            >
              결제하기
            </button>
          </div>
        </div>

        <!-- Payment Completed -->
        <div
          v-else-if="app.status === '수납완료'"
          class="flex items-center justify-end min-w-[100px]"
        >
          <button
            @click="$emit('show-details', app)"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            상세보기
          </button>
        </div>

        <!-- Waiting -->
        <div
          v-else-if="app.status === '대기'"
          class="flex items-center justify-end min-w-[100px]"
        >
          <button
            @click="$emit('show-waiting-info', app)"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            상세보기
          </button>
        </div>

        <!-- Application Completed -->
        <div
          v-else-if="app.status === '신청완료'"
          class="flex items-center justify-end min-w-[100px]"
        >
          <button
            @click="$emit('show-lottery-info', app)"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            상세보기
          </button>
        </div>

        <!-- Cancelled -->
        <div
          v-else-if="app.status === '취소'"
          class="flex items-center justify-end min-w-[100px]"
        >
          <span class="text-gray-400 dark:text-gray-500 font-medium"
            >취소됨</span
          >
        </div>

        <!-- Fallback -->
        <div v-else class="flex items-center justify-end min-w-[100px]">
          <button
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            상세보기
          </button>
        </div>
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
  applications: {
    type: Array,
    required: true,
  },
});

defineEmits([
  "show-details",
  "show-waiting-info",
  "show-lottery-info",
  "cancel-application",
]);

const getStatusClass = (status) => {
  switch (status) {
    case "신청완료":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300";
    case "당첨":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300";
    case "수납완료":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300";
    case "대기":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";
    case "취소":
      return "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 line-through";
    default:
      return "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400";
  }
};
</script>
