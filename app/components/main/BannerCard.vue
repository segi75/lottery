<template>
  <div
    class="col-span-12 md:col-span-8 glass-card p-8 relative overflow-hidden group flex flex-col justify-between min-h-[350px] animate-fade-in"
  >
    <!-- Background Effects -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-orange-400/10 via-red-400/10 to-yellow-400/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"
    ></div>
    <div
      class="absolute -right-20 -top-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl opacity-50 animate-pulse"
    ></div>

    <!-- 1. Welcome Message -->
    <div class="relative z-10 mb-6">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
        서울지부엔컴노인종합복지관에 오신걸 환영합니다.
      </h2>
    </div>

    <!-- 2. Schedule Visualization (Step UI) -->
    <div class="relative z-10 mb-8">
      <div class="flex items-center justify-between relative">
        <!-- Progress Line -->
        <div
          class="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 -z-10 transform -translate-y-1/2 rounded-full"
        ></div>
        <div
          class="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-green-500/50 via-blue-400 to-blue-600 bg-[length:200%_100%] animate-flow -z-10 transform -translate-y-1/2 rounded-full transition-all duration-1000"
          :style="{ width: `${(currentStep / (steps.length - 1)) * 100}%` }"
        ></div>

        <!-- Steps -->
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col items-center group/step"
        >
          <div
            class="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white dark:bg-gray-800 z-10"
            :class="[
              index < currentStep
                ? 'border-green-600/50 text-green-600/70 dark:border-green-500/50 dark:text-green-500/70'
                : index === currentStep
                ? 'border-blue-600 text-blue-600 scale-110 animate-icon-active ring-4 ring-blue-600/20'
                : 'border-gray-300 dark:border-gray-600 text-gray-400',
            ]"
          >
            <component :is="step.icon" class="w-6 h-6" />
          </div>
          <span
            class="mt-3 text-sm font-bold transition-colors duration-300"
            :class="
              index < currentStep
                ? 'text-green-700/70 dark:text-green-500/70'
                : index === currentStep
                ? 'text-blue-700 dark:text-blue-400'
                : 'text-gray-500 dark:text-gray-500'
            "
          >
            {{ step.label }}
          </span>
        </div>
      </div>

      <!-- Schedule Button -->
      <div class="mt-8 flex justify-center">
        <button
          @click="isModalOpen = true"
          class="px-6 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
        >
          <CalendarIcon class="w-4 h-4" />
          전체 일정 보기
        </button>
      </div>
    </div>

    <!-- 3. CTA Buttons -->
    <div class="grid grid-cols-3 gap-4 relative z-10 mt-auto">
      <NuxtLink
        to="/course/schedule"
        class="flex flex-col items-center justify-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-200 dark:hover:border-blue-700 transition-all group/btn"
      >
        <div
          class="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-2 group-hover/btn:scale-110 transition-transform"
        >
          <ClockIcon class="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <span class="text-sm font-bold text-gray-800 dark:text-gray-200"
          >수강시간표</span
        >
      </NuxtLink>

      <NuxtLink
        to="/payment-guide"
        class="flex flex-col items-center justify-center p-3 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-200 dark:hover:border-purple-700 transition-all group/btn"
      >
        <div
          class="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-full mb-2 group-hover/btn:scale-110 transition-transform"
        >
          <CreditCardIcon
            class="w-5 h-5 text-purple-600 dark:text-purple-400"
          />
        </div>
        <span class="text-sm font-bold text-gray-800 dark:text-gray-200"
          >수납안내</span
        >
      </NuxtLink>

      <NuxtLink
        to="/course"
        class="flex flex-col items-center justify-center p-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 hover:scale-[1.02] transition-all group/btn"
      >
        <div
          class="p-2 bg-white/20 rounded-full mb-2 group-hover/btn:scale-110 transition-transform"
        >
          <EditIcon class="w-5 h-5 text-white" />
        </div>
        <span class="text-sm font-bold">수강신청</span>
      </NuxtLink>
    </div>

    <!-- Schedule Modal -->
    <Teleport to="body">
      <TransitionRoot appear :show="isModalOpen" as="template">
        <Dialog as="div" @close="isModalOpen = false" class="relative z-[100]">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all"
                >
                  <DialogTitle
                    as="h3"
                    class="text-2xl font-bold leading-6 text-gray-900 dark:text-white mb-6 flex items-center justify-between"
                  >
                    <span>2026년 1분기 프로그램 안내</span>
                    <button
                      @click="isModalOpen = false"
                      class="text-gray-400 hover:text-gray-500"
                    >
                      <XIcon class="w-6 h-6" />
                    </button>
                  </DialogTitle>

                  <!-- Desktop View (Table) -->
                  <div class="hidden md:block mt-2 overflow-x-auto">
                    <table
                      class="w-full min-w-[700px] border-collapse border border-gray-300 dark:border-gray-600 text-sm md:text-base text-center"
                    >
                      <thead>
                        <tr
                          class="bg-amber-100 dark:bg-amber-900/50 text-gray-900 dark:text-gray-100"
                        >
                          <th
                            colspan="2"
                            class="border border-gray-300 dark:border-gray-600 p-3 font-bold"
                          >
                            구분
                          </th>
                          <th
                            class="border border-gray-300 dark:border-gray-600 p-3 font-bold"
                          >
                            일시
                          </th>
                          <th
                            class="border border-gray-300 dark:border-gray-600 p-3 font-bold"
                          >
                            장소
                          </th>
                          <th
                            class="border border-gray-300 dark:border-gray-600 p-3 font-bold"
                          >
                            방법
                          </th>
                          <th
                            class="border border-gray-300 dark:border-gray-600 p-3 font-bold"
                          >
                            준비물
                          </th>
                        </tr>
                      </thead>
                      <tbody class="text-gray-800 dark:text-gray-200">
                        <!-- 수강신청 -->
                        <tr>
                          <td
                            rowspan="2"
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 font-bold"
                          >
                            수강신청
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20 font-medium"
                          >
                            온라인
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20"
                          >
                            12.13.(토) 9:00 ~<br />12.16.(화) 16:00
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20"
                          >
                            복지관<br />홈페이지
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20"
                          >
                            복지관 홈페이지 내<br />온라인 수강신청
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20"
                          >
                            PC 또는<br />스마트폰
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-sky-50 dark:bg-sky-900/20 font-medium"
                          >
                            현장접수
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-sky-50 dark:bg-sky-900/20"
                          >
                            12.15.(월) 10:00 ~<br />12.16.(화) 15:00
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-sky-50 dark:bg-sky-900/20"
                          >
                            4층 대강당
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-sky-50 dark:bg-sky-900/20"
                          >
                            복지관 방문 신청
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-sky-50 dark:bg-sky-900/20"
                          >
                            회원증,<br />수강신청서
                          </td>
                        </tr>

                        <!-- 추첨결과 확인 -->
                        <tr class="bg-white dark:bg-gray-800">
                          <td
                            colspan="2"
                            class="border border-gray-300 dark:border-gray-600 p-3 font-bold"
                          >
                            추첨결과 확인
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            12.17.(수) 10:00
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            -
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            추첨결과<br />홈페이지 게시 및<br />복지관 내
                            키오스크 확인
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            -
                          </td>
                        </tr>

                        <!-- 수강료 납부 -->
                        <tr>
                          <td
                            rowspan="2"
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 font-bold"
                          >
                            수강료 납부
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20 font-medium"
                          >
                            온라인 납부
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20"
                          >
                            12.18.(목) 9:00 ~<br />12.21.(일) 23:59
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20"
                          >
                            복지관<br />홈페이지
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20"
                          >
                            복지관 홈페이지 내<br />온라인 수강신청
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-orange-50 dark:bg-orange-900/20"
                          >
                            PC 또는<br />스마트폰<br />(계좌이체/카드)
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-sky-50 dark:bg-sky-900/20 font-medium"
                          >
                            현장납부
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-sky-50 dark:bg-sky-900/20"
                          >
                            12.18.(목) 10:00 ~<br />12.19.(금) 15:00
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-sky-50 dark:bg-sky-900/20"
                          >
                            목 : 4층 대강당<br />금 : 2층 소강당
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-sky-50 dark:bg-sky-900/20"
                          >
                            복지관 방문 신청
                          </td>
                          <td
                            rowspan="3"
                            class="border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 align-middle"
                          >
                            회원증,<br />수강료<br />(현금/카드)
                          </td>
                        </tr>

                        <!-- 미달 프로그램 추가신청 -->
                        <tr class="bg-white dark:bg-gray-800">
                          <td
                            colspan="2"
                            class="border border-gray-300 dark:border-gray-600 p-3 font-bold"
                          >
                            미달 프로그램 추가신청
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            12.18.(목) 10:00 ~<br />12.19.(금) 15:00
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            목 : 4층 대강당<br />금 : 2층 소강당
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            정원 미달 프로그램에<br />한해
                            <span class="text-red-500 font-bold"
                              >선착순 현장접수</span
                            >
                          </td>
                        </tr>

                        <!-- 프로그램 진행 -->
                        <tr class="bg-white dark:bg-gray-800">
                          <td
                            colspan="2"
                            class="border border-gray-300 dark:border-gray-600 p-3 font-bold"
                          >
                            프로그램 진행
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            1.5.(월) ~ 3.27.(금)<br />[12주]
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            각<br />프로그램실
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            -
                          </td>
                          <td
                            class="border border-gray-300 dark:border-gray-600 p-3"
                          >
                            -
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <!-- Mobile View (Summary List) -->
                  <div class="md:hidden mt-2 space-y-4">
                    <div
                      v-for="(item, index) in scheduleDetails"
                      :key="index"
                      class="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-100 dark:border-gray-600"
                    >
                      <div class="flex items-center gap-3 mb-3">
                        <div
                          class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold text-sm"
                        >
                          {{ index + 1 }}
                        </div>
                        <h4
                          class="text-lg font-bold text-gray-900 dark:text-white"
                        >
                          {{ item.title }}
                        </h4>
                      </div>
                      <div class="space-y-3 pl-11">
                        <div
                          v-for="(detail, dIndex) in item.details"
                          :key="dIndex"
                          class="text-sm"
                        >
                          <div class="flex flex-col">
                            <span
                              v-if="detail.label"
                              class="font-bold text-gray-700 dark:text-gray-200 mb-1"
                            >
                              {{ detail.label }}
                            </span>
                            <span
                              class="text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
                            >
                              {{ detail.content }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-6">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 w-full shadow-md transition-colors"
                      @click="isModalOpen = false"
                    >
                      확인
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import {
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  CreditCard as CreditCardIcon,
  Edit as EditIcon,
  FileText as FileTextIcon,
  Gift as GiftIcon,
  UserPlus as UserPlusIcon,
  PlayCircle as PlayCircleIcon,
  X as XIcon,
} from "lucide-vue-next";

const isModalOpen = ref(false);
const currentStep = 2; // 0: 접수, 1: 추첨, 2: 수납 (현재), 3: 추가신청, 4: 개강

const steps = [
  { label: "접수", icon: FileTextIcon },
  { label: "추첨", icon: GiftIcon },
  { label: "수납", icon: CreditCardIcon },
  { label: "추가신청", icon: UserPlusIcon },
  { label: "개강", icon: PlayCircleIcon },
];

const scheduleDetails = [
  {
    title: "수강신청",
    details: [
      {
        label: "온라인",
        content: "12.13.(토) 9:00 ~ 12.16.(화) 16:00 (복지관 홈페이지)",
      },
      {
        label: "현장접수",
        content: "12.15.(월) 10:00 ~ 12.16.(화) 15:00 (4층 대강당)",
      },
    ],
  },
  {
    title: "추첨결과 확인",
    details: [
      { label: "일시", content: "12.17.(수) 10:00" },
      { label: "방법", content: "홈페이지 게시 및 복지관 내 키오스크" },
    ],
  },
  {
    title: "수강료 납부",
    details: [
      {
        label: "온라인 납부",
        content: "12.18.(목) 9:00 ~ 12.21.(일) 23:59",
      },
      {
        label: "현장 납부",
        content:
          "12.18.(목) 10:00 ~ 12.19.(금) 15:00 (목: 4층 대강당 / 금: 2층 소강당)",
      },
    ],
  },
  {
    title: "미달 프로그램 추가신청",
    details: [
      { label: "일시", content: "12.18.(목) 10:00 ~ 12.19.(금) 15:00" },
      {
        label: "방법",
        content: "정원 미달 프로그램에 한해 선착순 현장접수",
      },
    ],
  },
  {
    title: "프로그램 진행(개강)",
    details: [{ label: "기간", content: "1.5.(월) ~ 3.27.(금) [12주간]" }],
  },
];
</script>

<style scoped>
@keyframes flow {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.animate-flow {
  animation: flow 3s linear infinite;
}

@keyframes icon-color {
  0%,
  100% {
    border-color: #3b82f6;
    color: #3b82f6;
  }
  50% {
    border-color: #60a5fa;
    color: #60a5fa;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
  }
}

.animate-icon-active {
  animation: icon-color 2s infinite ease-in-out;
}
</style>
