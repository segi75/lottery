<template>
  <div class="relative w-full md:w-48">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition-colors"
    >
      <option value="전체">전체 상태</option>
      <option v-for="status in statuses" :key="status" :value="status">
        {{ status }}
      </option>
    </select>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300"
    >
      <ChevronDownIcon class="w-4 h-4" />
    </div>
  </div>
</template>

<script setup>
import { ChevronDown as ChevronDownIcon } from "lucide-vue-next";

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  statuses: {
    type: Array,
    default: () => ["신청완료", "당첨", "대기", "수납완료", "취소"],
  },
});

defineEmits(["update:modelValue"]);
</script>
