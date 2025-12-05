<template>
  <div class="overflow-x-auto">
    <table
      class="w-full text-sm text-left border-collapse border border-gray-200 dark:border-gray-700"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center"
      >
        <tr>
          <th
            scope="col"
            colspan="2"
            class="px-4 py-3 border border-gray-200 dark:border-gray-600"
          >
            구분
          </th>

          <th
            scope="col"
            class="px-4 py-3 border border-gray-200 dark:border-gray-600"
          >
            장소
          </th>
          <th
            scope="col"
            class="px-4 py-3 border border-gray-200 dark:border-gray-600"
          >
            방법
          </th>
          <th
            scope="col"
            class="px-4 py-3 border border-gray-200 dark:border-gray-600"
          >
            결제수단
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-700 dark:text-gray-300">
        <!-- Row 1 -->
        <tr class="bg-white dark:bg-gray-800">
          <td
            rowspan="2"
            class="px-4 py-3 border border-gray-200 dark:border-gray-600 font-bold text-center align-middle bg-gray-50 dark:bg-gray-900/50"
          >
            수강료<br />납부
          </td>
          <td
            class="px-4 py-3 border border-gray-200 dark:border-gray-600 font-medium text-center"
          >
            온라인 납부
          </td>

          <td
            class="px-4 py-3 border border-gray-200 dark:border-gray-600 text-center"
          >
            복지관 홈페이지
          </td>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-600">
            복지관 홈페이지 내<br />온라인 수강신청
          </td>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-600">
            PC 또는 스마트폰<br />(계좌이체/카드)
          </td>
        </tr>
        <!-- Row 2 -->
        <tr class="bg-white dark:bg-gray-800">
          <td
            class="px-4 py-3 border border-gray-200 dark:border-gray-600 font-medium text-center"
          >
            현장납부
          </td>

          <td
            class="px-4 py-3 border border-gray-200 dark:border-gray-600 text-center"
          >
            목 : 4층 대강당<br />금 : 2층 소강당
          </td>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-600">
            복지관 방문 신청
          </td>
          <td class="px-4 py-3 border border-gray-200 dark:border-gray-600">
            회원증, 수강료<br />(현금/카드)
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// No props or logic needed for this static table as per requirements
</script>
