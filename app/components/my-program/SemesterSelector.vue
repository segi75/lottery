<template>
  <div class="relative w-full md:w-64">
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition-colors"
    >
      <option v-for="semester in semesters" :key="semester" :value="semester">
        {{ semester }}
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
  semesters: {
    type: Array,
    default: () => ["2024년 1학기", "2023년 4학기", "2023년 3학기"],
  },
});

defineEmits(["update:modelValue"]);
</script>
