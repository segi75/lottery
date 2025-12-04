<template>
  <div class="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2
        class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-3"
      >
        <EditIcon
          class="w-8 h-8 md:w-10 md:h-10 text-blue-600 dark:text-blue-400"
        />
        수강신청
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        원하시는 강좌를 검색하고 신청해보세요.
      </p>
    </div>

    <CourseSearch @search="handleSearch" />

    <CourseList :courses="paginatedCourses" />

    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Edit as EditIcon } from "lucide-vue-next";
import CourseSearch from "~/components/course/CourseSearch.vue";
import CourseList from "~/components/course/CourseList.vue";
import Pagination from "~/components/common/Pagination.vue";

// Mock Data Generation
const generateMockCourses = () => {
  const courses = [];
  const categories = ["정보화교육", "건강증진", "취미여가", "평생교육", "어학"];
  const instructors = [
    "김철수",
    "이영희",
    "박지성",
    "최민수",
    "정미경",
    "김영수",
    "이민호",
  ];
  const statuses = ["접수중", "마감임박", "접수마감", "대기접수"];

  for (let i = 1; i <= 30; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const instructor =
      instructors[Math.floor(Math.random() * instructors.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    courses.push({
      id: i,
      title: `${category} 강좌 ${i}`,
      instructor: instructor,
      time: "월/수 10:00 - 12:00",
      period: "2024.03.04 - 2024.06.21",
      category: category,
      status: status,
      current: Math.floor(Math.random() * 20),
      capacity: 20,
    });
  }
  return courses;
};

const allCourses = ref(generateMockCourses());

const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 12;

const filteredCourses = computed(() => {
  if (!searchQuery.value) return allCourses.value;
  const query = searchQuery.value.toLowerCase();
  return allCourses.value.filter(
    (course) =>
      course.title.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query)
  );
});

const totalPages = computed(() =>
  Math.ceil(filteredCourses.value.length / itemsPerPage)
);

const paginatedCourses = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredCourses.value.slice(start, end);
});

const handleSearch = (query) => {
  searchQuery.value = query;
  currentPage.value = 1; // Reset to first page on search
};

const handlePageChange = (page) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
