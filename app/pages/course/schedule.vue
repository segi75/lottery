<template>
<div class="min-h-screen pb-12">
    <PageHeader
      title="프로그램실 시간표 안내"
      subtitle="각 강의실별 프로그램 시간표를 확인하실 수 있습니다."
    >
      <template #icon>
        <CalendarIcon
          class="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-300"
        />
      </template>
    </PageHeader>

    <div
      class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center"
    >
      <div
        class="w-full glass-card p-4 md:p-8 relative overflow-hidden animate-fade-in"
      >
        <div class="relative z-10">

        <!-- Selectors -->
        <div class="mb-6 flex flex-col sm:flex-row justify-end gap-4">
          <!-- Day Selector -->
          <div class="relative w-full sm:w-48">
            <label
              for="day-select"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              요일 선택
            </label>
            <select
              id="day-select"
              v-model="selectedDay"
              class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            >
              <option value="all">전체 요일</option>
              <option value="월">월요일</option>
              <option value="화">화요일</option>
              <option value="수">수요일</option>
              <option value="목">목요일</option>
              <option value="금">금요일</option>
            </select>
          </div>

          <!-- Classroom Selector -->
          <div class="relative w-full sm:w-64">
            <label
              for="classroom-select"
              class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              강의실 선택
            </label>
            <select
              id="classroom-select"
              v-model="selectedClassroom"
              class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            >
              <option value="all">전체 강의실</option>
              <optgroup label="2층">
                <option value="예술교실">예술교실</option>
                <option value="소강당">소강당</option>
                <option value="음악실">음악실</option>
              </optgroup>
              <optgroup label="3층">
                <option value="바둑장기실">바둑장기실</option>
                <option value="교양교실">교양교실</option>
                <option value="스마트교실">스마트교실</option>
              </optgroup>
              <optgroup label="4층">
                <option value="탁구장">탁구장</option>
                <option value="당구장">당구장</option>
                <option value="스크린파크골프장">스크린파크골프장</option>
                <option value="대강당">대강당</option>
              </optgroup>
            </select>
          </div>
        </div>

        <!-- Schedule Table Component -->
        <ScheduleTable
          :selected-classroom="selectedClassroom"
          :selected-day="selectedDay"
        />

        <!-- Action Button -->
        <div class="mt-12 text-center">
          <NuxtLink
            to="/course"
            class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-colors"
          >
            수강신청 하러가기
            <ArrowRightIcon class="ml-2 w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import {
  Calendar as CalendarIcon,
  ArrowRight as ArrowRightIcon,
} from "lucide-vue-next";
import ScheduleTable from "~/components/course/ScheduleTable.vue";
import PageHeader from "~/components/common/PageHeader.vue";
import { ref } from "vue";

const selectedClassroom = ref("all");
const selectedDay = ref("all");
</script>
